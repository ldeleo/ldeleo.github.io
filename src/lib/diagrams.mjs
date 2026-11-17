/**
 * Inline figures for the book. Two layouts each: a wide one and a stacked
 * one. CSS shows one at a time, so only the visible SVG is read aloud.
 * Colors are the reading-theme variables, so light and dark follow the page.
 */

function frame(id, title, description, caption, wide, stack) {
  return `<figure class="diagram" id="${id}">
  <p class="diagram-title" id="${id}-title">${title}</p>
  <p class="diagram-desc" id="${id}-desc">${description}</p>
  ${wide}
  ${stack}
  <p class="diagram-caption">${caption}</p>
</figure>`;
}

function svg(cls, box, labelId, captionId, body) {
  return `<svg class="${cls}" viewBox="${box}" role="img" aria-labelledby="${labelId}" aria-describedby="${captionId}" focusable="false">
  ${body}
</svg>`;
}

const ink = "currentColor";
const sans = "var(--font-sans)";
const serif = "var(--font-serif)";

function systemWide(labelId, captionId) {
  return svg(
    "diagram-wide",
    "0 0 720 380",
    labelId,
    captionId,
    `
    <path d="M148 112C230 40 490 40 572 112" fill="none" stroke="${ink}" stroke-width="1.5"/>
    <path d="M560 100l12 12-16 6" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M572 214C490 286 230 286 148 214" fill="none" stroke="${ink}" stroke-width="1.5"/>
    <path d="M160 226l-12-12 16-8" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>
    <text x="360" y="28" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="15">Loops that close fast</text>
    <circle cx="92" cy="163" r="58" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="92" y="169" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">People</text>
    <rect x="200" y="103" width="320" height="120" rx="18" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="360" y="158" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="22">Shared memory</text>
    <text x="360" y="184" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="14">one system</text>
    <circle cx="628" cy="163" r="58" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="628" y="169" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">Agents</text>
    <circle cx="168" cy="318" r="6" fill="var(--read-accent)"/>
    <text x="180" y="323" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <circle cx="292" cy="318" r="6" fill="var(--read-accent)"/>
    <text x="304" y="323" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <circle cx="416" cy="318" r="6" fill="var(--read-accent)"/>
    <text x="428" y="323" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <text x="360" y="356" text-anchor="middle" fill="var(--read-accent)" font-family="${sans}" font-size="14">where a person decides</text>`
  );
}

function systemStack(labelId, captionId) {
  return svg(
    "diagram-stack",
    "0 0 360 640",
    labelId,
    captionId,
    `
    <text x="180" y="28" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="14">Loops that close fast</text>
    <circle cx="180" cy="86" r="44" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="180" y="92" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">People</text>
    <path d="M180 130v28" fill="none" stroke="${ink}" stroke-width="1.5"/>
    <path d="M174 150l6 10 6-10" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="36" y="176" width="248" height="92" rx="16" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="160" y="216" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">Shared memory</text>
    <text x="160" y="240" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">one system</text>
    <circle cx="78" cy="304" r="6" fill="var(--read-accent)"/>
    <text x="92" y="309" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <circle cx="78" cy="332" r="6" fill="var(--read-accent)"/>
    <text x="92" y="337" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <circle cx="78" cy="360" r="6" fill="var(--read-accent)"/>
    <text x="92" y="365" fill="var(--read-accent)" font-family="${sans}" font-size="14">Judgment</text>
    <text x="160" y="392" text-anchor="middle" fill="var(--read-accent)" font-family="${sans}" font-size="13">where a person decides</text>
    <path d="M160 408v28" fill="none" stroke="${ink}" stroke-width="1.5"/>
    <path d="M154 428l6 10 6-10" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="160" cy="512" r="44" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="160" y="518" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">Agents</text>
    <path d="M204 512C332 496 332 96 224 86" fill="none" stroke="${ink}" stroke-width="1.5"/>
    <path d="M214 98l10-14 6 12" fill="none" stroke="${ink}" stroke-width="1.5" stroke-linejoin="round"/>`
  );
}

function timelineWide(labelId, captionId) {
  return svg(
    "diagram-wide",
    "0 0 720 230",
    labelId,
    captionId,
    `
    <line x1="88" y1="78" x2="632" y2="78" stroke="${ink}" stroke-width="1.5"/>
    <circle cx="120" cy="78" r="7" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <circle cx="600" cy="78" r="7" fill="var(--read-accent)" stroke="var(--read-accent)" stroke-width="1.5"/>
    <text x="120" y="40" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">July 2026</text>
    <text x="120" y="112" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">The essay</text>
    <text x="120" y="134" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">from the beginning</text>
    <text x="360" y="168" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">What changed</text>
    <text x="360" y="192" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">start date · people and agents</text>
    <text x="360" y="214" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">shared memory · company</text>
    <text x="600" y="40" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">November 2026</text>
    <text x="600" y="112" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">Working definition · v0.2</text>
    <text x="600" y="134" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">people and agents</text>`
  );
}

function timelineStack(labelId, captionId) {
  return svg(
    "diagram-stack",
    "0 0 360 340",
    labelId,
    captionId,
    `
    <line x1="36" y1="36" x2="36" y2="300" stroke="${ink}" stroke-width="1.5"/>
    <circle cx="36" cy="48" r="6" fill="var(--read-card)" stroke="${ink}" stroke-width="1.5"/>
    <text x="56" y="44" fill="${ink}" font-family="${serif}" font-size="16">July 2026</text>
    <text x="56" y="68" fill="var(--read-muted)" font-family="${sans}" font-size="13">The essay · from the beginning</text>
    <text x="56" y="150" fill="var(--read-muted)" font-family="${sans}" font-size="13">What changed</text>
    <text x="56" y="174" fill="${ink}" font-family="${sans}" font-size="14">start date</text>
    <text x="56" y="196" fill="${ink}" font-family="${sans}" font-size="14">people and agents</text>
    <text x="56" y="218" fill="${ink}" font-family="${sans}" font-size="14">shared memory · company</text>
    <circle cx="36" cy="292" r="6" fill="var(--read-accent)"/>
    <text x="56" y="288" fill="${ink}" font-family="${serif}" font-size="16">November 2026</text>
    <text x="56" y="312" fill="var(--read-muted)" font-family="${sans}" font-size="13">v0.2 · people and agents</text>`
  );
}

function wordsWide(labelId, captionId) {
  return svg(
    "diagram-wide",
    "0 0 720 250",
    labelId,
    captionId,
    `
    <rect x="250" y="78" width="220" height="92" rx="16" fill="var(--read-card)" stroke="var(--read-accent)" stroke-width="1.75"/>
    <text x="360" y="118" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">AI-native</text>
    <text x="360" y="142" text-anchor="middle" fill="var(--read-accent)" font-family="${sans}" font-size="13">how it is built</text>
    <rect x="16" y="16" width="200" height="72" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="116" y="46" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">AI-enabled</text>
    <text x="116" y="68" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="12">a feature added</text>
    <rect x="504" y="16" width="200" height="72" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="604" y="46" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">AI-first</text>
    <text x="604" y="68" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="12">a direction</text>
    <rect x="260" y="186" width="200" height="52" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="360" y="218" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">Agentic · a capability</text>`
  );
}

function wordsStack(labelId, captionId) {
  return svg(
    "diagram-stack",
    "0 0 360 420",
    labelId,
    captionId,
    `
    <rect x="40" y="16" width="280" height="88" rx="16" fill="var(--read-card)" stroke="var(--read-accent)" stroke-width="1.75"/>
    <text x="180" y="52" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">AI-native</text>
    <text x="180" y="76" text-anchor="middle" fill="var(--read-accent)" font-family="${sans}" font-size="13">how it is built · this book</text>
    <rect x="40" y="124" width="280" height="72" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="180" y="154" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">AI-enabled</text>
    <text x="180" y="176" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">a feature added</text>
    <rect x="40" y="212" width="280" height="72" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="180" y="242" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">AI-first</text>
    <text x="180" y="264" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">a direction</text>
    <rect x="40" y="300" width="280" height="72" rx="14" fill="var(--read-card)" stroke="${ink}" stroke-width="1.25"/>
    <text x="180" y="330" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="16">Agentic</text>
    <text x="180" y="352" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">a capability</text>`
  );
}

function wavesWide(labelId, captionId) {
  return svg(
    "diagram-wide",
    "0 0 720 280",
    labelId,
    captionId,
    `
    <text x="180" y="36" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">Cloud-native, then</text>
    <text x="540" y="36" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="18">AI-native, now</text>
    <line x1="360" y1="16" x2="360" y2="264" stroke="var(--read-line)" stroke-width="1.5"/>
    <text x="180" y="84" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">A community wrote it down</text>
    <text x="180" y="106" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">CNCF v1.1 · February 2024</text>
    <text x="540" y="84" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">Written in public, and dated</text>
    <text x="540" y="106" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">Working definition · v0.2</text>
    <text x="180" y="160" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">Practices, not products</text>
    <text x="540" y="160" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">How the company is built</text>
    <text x="180" y="214" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">One layer got cheaper</text>
    <text x="180" y="236" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">the store, over ~15 years</text>
    <text x="540" y="214" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">More of the company moves</text>
    <text x="540" y="236" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">building, selling, support, the loop</text>`
  );
}

function wavesStack(labelId, captionId) {
  return svg(
    "diagram-stack",
    "0 0 360 460",
    labelId,
    captionId,
    `
    <text x="180" y="32" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="17">Cloud-native, then</text>
    <text x="180" y="64" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">A community wrote it down</text>
    <text x="180" y="86" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">CNCF v1.1 · February 2024</text>
    <text x="180" y="122" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">Practices, not products</text>
    <text x="180" y="158" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">One layer got cheaper</text>
    <text x="180" y="180" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">the store, over ~15 years</text>
    <line x1="40" y1="208" x2="320" y2="208" stroke="var(--read-line)" stroke-width="1.5"/>
    <text x="180" y="248" text-anchor="middle" fill="${ink}" font-family="${serif}" font-size="17">AI-native, now</text>
    <text x="180" y="280" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">Written in public, and dated</text>
    <text x="180" y="302" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">Working definition · v0.2</text>
    <text x="180" y="338" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">How the company is built</text>
    <text x="180" y="374" text-anchor="middle" fill="${ink}" font-family="${sans}" font-size="14">More of the company moves</text>
    <text x="180" y="396" text-anchor="middle" fill="var(--read-muted)" font-family="${sans}" font-size="13">building, selling, support, the loop</text>`
  );
}

const FIGURES = {
  system: {
    title: "One system",
    description:
      "People on one side and agents on the other, sharing one memory. The work moves in loops that close fast. Ember marks show where human judgment decides.",
    caption:
      "People and agents share one memory. The work moves in loops that close quickly, and the marked points are where a person decides.",
    wide: systemWide,
    stack: systemStack,
  },
  timeline: {
    title: "How the definition moved",
    description:
      "A timeline from the July 2026 essay, built around AI from the beginning, to the November 2026 working definition, version 0.2. Between them: the start date mattered less, people and agents replaced built around AI, infrastructure became shared memory, and startup became company.",
    caption:
      "The essay came out in July 2026, and the working definition, version 0.2, dates from November 2026. Four things changed in between.",
    wide: timelineWide,
    stack: timelineStack,
  },
  words: {
    title: "Four words, four jobs",
    description:
      "AI-enabled is a feature added. AI-first is a direction. Agentic is a capability. AI-native, in this book, is how the company is built.",
    caption: "A summary of the distinctions above. AI-native is the term this book uses. The other three name things that sit close to it.",
    wide: wordsWide,
    stack: wordsStack,
  },
  waves: {
    title: "Then, and this time",
    description:
      "Cloud-native was written down by a community, as practices rather than products, after one layer of building got cheaper. AI-native is being written in public, and this wave reaches building, selling, support, and the loop between them.",
    caption:
      "Cloud-native settled when someone wrote the definition down. The last cheap wave changed the store. This one reaches the company.",
    wide: wavesWide,
    stack: wavesStack,
  },
};

export function diagramHtml(name) {
  const figure = FIGURES[name];
  if (!figure) return "";
  const id = `diagram-${name}`;
  const wide = figure.wide(`${id}-title`, `${id}-desc`);
  const stack = figure.stack(`${id}-title`, `${id}-desc`);
  return frame(id, figure.title, figure.description, figure.caption, wide, stack);
}
