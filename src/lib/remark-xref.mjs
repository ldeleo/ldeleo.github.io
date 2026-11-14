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
