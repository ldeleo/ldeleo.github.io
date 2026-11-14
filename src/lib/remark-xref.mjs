/**
 * Turns `[→ Topic: Section title]` into a non-clickable chip.
 * Later topics can become links by reading data-topic and data-section.
 */
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
        `<span class="xref" data-topic="${escapeHtml(topic)}" data-section="${escapeHtml(section)}">` +
        `<span class="xref-topic">${escapeHtml(topic)}</span>` +
        `<span class="xref-section">${escapeHtml(section)}</span>` +
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

function nodeText(node) {
  if (!node) return "";
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(nodeText).join("");
  return "";
}

function keyPointsBox(points) {
  return element("aside", { className: ["key-points"] }, [
    element("h2", {}, [plain("Key points")]),
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
    element("p", { className: ["score-result-text"] }, [plain("0 of 14 · about 0%")]),
    element(
      "ol",
      { className: ["score-bands"] },
      BANDS.map((name, index) =>
        element("li", index === 0 ? { ariaCurrent: "true" } : {}, [plain(name)])
      )
    ),
  ]);
}

function sectionClass(id) {
  const classes = ["topic-section"];
  if (id === "the-map") classes.push("topic-card", "topic-map");
  if (id === "how-the-words-relate") classes.push("topic-card", "topic-compare");
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
        out.push(child);
        if (points.length) out.push(keyPointsBox(points));
        continue;
      }
      if (child.type === "element" && child.tagName === "h2") {
        flush();
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
    annotate(tree);
  };
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
