/**
 * Turns `[→ Topic: Section title]` into a non-clickable chip.
 * Later topics can become links by reading data-topic and data-section.
 */
import { diagramHtml } from "./diagrams.mjs";

const XREF = /\[→\s*([^:\]]+?):\s*([^\]]+?)\]/g;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function splitText(value) {
  const parts = [];
  let last = 0;
  for (const match of value.matchAll(XREF)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ type: "text", value: value.slice(last, index) });
    const topic = match[1].trim();
    const section = match[2].trim();
    parts.push({
      type: "html",
      value:
        `<span class="xref" title="Coming soon" data-topic="${escapeHtml(topic)}" data-section="${escapeHtml(section)}">` +
        `<span class="xref-topic">${escapeHtml(topic)}</span>` +
        `<span class="xref-section">${escapeHtml(section)}</span>` +
        `<span class="soon">Coming soon</span>` +
        `</span>`,
    });
    last = index + match[0].length;
  }
  if (last < value.length) parts.push({ type: "text", value: value.slice(last) });
  return parts;
}

function walk(node) {
  if (!node?.children) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === "text" && child.value.includes("[→")) {
      const parts = splitText(child.value);
      next.push(...(parts.length ? parts : [child]));
    } else {
      walk(child);
      next.push(child);
    }
  }
  node.children = next;
}

export function remarkXref() {
  return (tree) => walk(tree);
}

export function rehypeTableWrap() {
  return (tree) => wrap(tree);
}

const BANDS = ["AI-using", "AI-enabled", "AI-native in parts", "AI-native"];

function element(tag, properties, children) {
  return { type: "element", tagName: tag, properties, children };
}

function plain(value) {
  return { type: "text", value };
}

function classList(node) {
  const current = node.properties?.className;
  if (Array.isArray(current)) return current;
  if (typeof current === "string" && current) return current.split(/\s+/);
  return [];
}

function addClass(node, name) {
  node.properties = node.properties ?? {};
  const list = classList(node);
  if (!list.includes(name)) list.push(name);
  node.properties.className = list;
}

function protectHyphen(node) {
  if (!node) return;
  if (node.type === "text" && node.value) {
    node.value = node.value.replace(/AI-([Nn]ative)/g, "AI\u2011$1");
    if (node.value.startsWith("\u201d")) node.value = `\u201c${node.value.slice(1)}`;
    return;
  }
  if (node.children) node.children.forEach(protectHyphen);
}

function nodeText(node) {
  if (!node) return "";
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(nodeText).join("");
  return "";
}

function keyPointsBox(points) {
  return element("aside", { className: ["key-points"] }, [
    element("p", { className: ["key-points-label"] }, [plain("Key points")]),
    element(
      "ul",
      {},
      points.map((point) => element("li", {}, [plain(point)]))
    ),
  ]);
}

function scoreControl(index) {
  const name = `q${index}`;
  return element("fieldset", { className: ["q-score"] }, [
    element("legend", {}, [plain(`Score for question ${index}, from 0 to 2`)]),
    ...[0, 1, 2].map((value) =>
      element("label", {}, [
        element("input", { type: "radio", name, value: String(value) }, []),
        element("span", {}, [plain(String(value))]),
      ])
    ),
  ]);
}

function scoreResult() {
  return element("div", { className: ["score-result"], ariaLive: "polite" }, [
    element("p", { className: ["score-result-text"] }, [plain("Score each question from 0 to 2.")]),
    element(
      "ol",
      { className: ["score-bands"] },
      BANDS.map((name) => element("li", {}, [plain(name)]))
    ),
  ]);
}

function sectionClass(id) {
  const classes = ["topic-section"];
  if (id === "the-map") classes.push("topic-map");
  if (id === "how-the-words-relate") classes.push("topic-compare");
  if (String(id).startsWith("the-test")) classes.push("topic-card", "topic-test");
  return classes;
}

function headingId(node, seen) {
  const existing = node.properties?.id;
  if (existing) return existing;
  const base = nodeText(node)
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  const id = count === 0 ? base : `${base}-${count}`;
  node.properties = node.properties ?? {};
  node.properties.id = id;
  return id;
}

export function rehypeReading() {
  return (tree, file) => {
    const points = file.data?.astro?.frontmatter?.keyPoints ?? [];
    if (tree.type !== "root" || !tree.children) return;

    const out = [];
    let section = null;
    const seen = new Map();
    const flush = () => {
      if (section) out.push(section);
      section = null;
    };

    for (const child of tree.children) {
      if (child.type === "element" && child.tagName === "h1") {
        headingId(child, seen);
        protectHyphen(child);
        out.push(child);
        if (points.length) out.push(keyPointsBox(points));
        continue;
      }
      if (child.type === "element" && child.tagName === "h3") {
        protectHyphen(child);
        headingId(child, seen);
        if (section) section.children.push(child);
        else out.push(child);
        continue;
      }
      if (child.type === "element" && child.tagName === "h2") {
        flush();
        protectHyphen(child);
        const id = headingId(child, seen);
        const classes = sectionClass(id);
        section = element("section", { className: classes }, [child]);
        continue;
      }
      if (section) section.children.push(child);
      else out.push(child);
    }
    flush();
    tree.children = out;
    replaceEmbeds(tree, file);
    annotate(tree);
    labelTables(tree);
    tidyLinks(tree);
  };
}

const CTA = {
  hear: {
    id: "invite-hear",
    text: "If you think it's wrong, or you've seen a case it doesn't fit, I'd genuinely like to hear it.",
    x: "@LorenzodeLeo_ I'd define AI-native differently: …",
    linkedin: "Lorenzo de Leo, I'd define AI-native differently: …",
  },
  cases: {
    id: "invite-cases",
    text: "If you're building a company like this, or you know one, I'd like to see it. Send it my way, and the strongest cases will make their way into this chapter.",
    x: "@LorenzodeLeo_ here's an AI-native company for your book: [name], because [what makes it AI-native].",
    linkedin: "Lorenzo de Leo, here's an AI-native company for your book: [name], because [what makes it AI-native].",
  },
};

function pageUrl(file, hash) {
  const slug = file.data?.astro?.frontmatter?.slug ?? "";
  const preview = process.env.PREVIEW_BASE === "/preview" ? "/preview" : "";
  return `https://lorenzodeleo.com${preview}/${slug}${hash}`;
}

function shareHref(kind, text, url) {
  const payload = `${text} ${url}`;
  if (kind === "x") return `https://x.com/intent/post?text=${encodeURIComponent(payload)}`;
  return `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(payload)}`;
}

function newTabSpan() {
  return element("span", { className: ["new-tab"] }, [plain(" (opens in a new tab)")]);
}

function shareLink(kind, label, post, url) {
  return element(
    "a",
    {
      className: ["cta-btn"],
      href: shareHref(kind, post, url),
      target: "_blank",
      rel: ["noopener", "noreferrer"],
      dataShare: kind,
      dataShareText: post,
    },
    [plain(label), newTabSpan()]
  );
}

function ctaBox(kind, file) {
  const spec = CTA[kind];
  const url = pageUrl(file, `#${spec.id}`);
  return element("aside", { className: ["cta-box"], id: spec.id }, [
    element("p", {}, [plain(spec.text)]),
    element("div", { className: ["cta-actions"] }, [
      shareLink("x", "Post on X", spec.x, url),
      shareLink("linkedin", "Post on LinkedIn", spec.linkedin, url),
    ]),
  ]);
}

function moreNote(topic, section) {
  return element("p", { className: ["more-note"] }, [
    element("span", { className: ["soon"], title: "Coming soon" }, [plain("Coming soon")]),
    plain(` More in ${topic}: ${section}`),
  ]);
}

function replaceEmbeds(node, file) {
  if (!node?.children) return;
  node.children = node.children.flatMap((child) => {
    if (child.type === "element" && child.tagName === "p") {
      const text = nodeText(child).trim();
      const cta = text.match(/^\[\[cta:(hear|cases)\]\]$/);
      if (cta) return [ctaBox(cta[1], file)];
      const diagram = text.match(/^\[\[diagram:(system|timeline|words|waves)\]\]$/);
      if (diagram) return [{ type: "raw", value: diagramHtml(diagram[1]) }];
      const more = text.match(/^\[\[more:([^|\]]+)\|(.+)\]\]$/);
      if (more) return [moreNote(more[1].trim(), more[2].trim())];
    }
    replaceEmbeds(child, file);
    return [child];
  });
}

function labelTables(node) {
  if (!node?.children) return;
  if (node.type === "element" && node.tagName === "table") {
    const headers = [];
    const collect = (current) => {
      if (!current?.children) return;
      for (const child of current.children) {
        if (child.type === "element" && child.tagName === "th") headers.push(nodeText(child).trim());
        else collect(child);
      }
    };
    collect(node);
    let column = 0;
    const mark = (current, inBody) => {
      if (!current?.children) return;
      for (const child of current.children) {
        if (child.type !== "element") continue;
        if (child.tagName === "tbody") mark(child, true);
        else if (child.tagName === "tr" && inBody) {
          column = 0;
          mark(child, true);
        } else if (child.tagName === "td" && inBody) {
          child.properties = child.properties ?? {};
          child.properties.dataLabel = headers[column] || "";
          column += 1;
        } else if (child.tagName !== "thead") mark(child, inBody);
      }
    };
    mark(node, false);
  }
  for (const child of node.children) labelTables(child);
}

function tidyLinks(node) {
  if (!node?.children) return;
  for (const child of node.children) {
    if (child.type === "element" && child.tagName === "a") {
      const label = nodeText(child).replace(/\s*\(opens in a new tab\)\s*/g, "").trim();
      if (label && !/^https?:/i.test(label) && label.length <= 42) addClass(child, "cite");
      const href = child.properties?.href;
      const hrefValue = Array.isArray(href) ? href[0] : href;
      if (typeof hrefValue === "string" && /^https?:/i.test(hrefValue)) {
        child.properties.target = "_blank";
        child.properties.rel = ["noopener", "noreferrer"];
        const marked = child.children?.some(
          (item) => item.type === "element" && classList(item).includes("new-tab")
        );
        if (!marked) child.children.push(newTabSpan());
      }
    }
    tidyLinks(child);
  }
}

function annotate(node) {
  if (!node?.children) return;
  for (const child of node.children) {
    if (child.type === "element" && child.tagName === "p" && nodeText(child).includes("spine of this book")) {
      addClass(child, "spine-callout");
    }
    if (child.type === "element" && child.tagName === "blockquote" && nodeText(child).includes("whose construction assumes")) {
      addClass(child, "definition-callout");
    }
    if (child.type === "element" && classList(child).includes("topic-test")) {
      const list = child.children?.find((item) => item.type === "element" && item.tagName === "ol");
      const items = list?.children?.filter((item) => item.type === "element" && item.tagName === "li") ?? [];
      if (items.length === 7 && list) {
        items.forEach((item, index) => item.children.push(scoreControl(index + 1)));
        const at = child.children.indexOf(list);
        child.children.splice(at + 1, 0, scoreResult());
      }
    }
    annotate(child);
  }
}

function wrap(node) {
  if (!node?.children) return;
  node.children = node.children.flatMap((child) => {
    wrap(child);
    if (child.type === "element" && child.tagName === "table") {
      return [
        {
          type: "element",
          tagName: "div",
          properties: { className: ["table-wrap"] },
          children: [child],
        },
      ];
    }
    return [child];
  });
}
