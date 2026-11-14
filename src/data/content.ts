/**
 * Thesis, talks, stages, and essays.
 * The home page is this argument, in order. Other routes reuse the same data.
 */

import {
  ARTICLE_AI_NATIVE_URL,
  ARTICLE_JUDGMENT_URL,
  ARTICLE_LATAM_URL,
} from "@/lib/constants";

export type Belief = {
  id: string;
  index: string;
  title: string;
  body: string;
};

export const BELIEFS: Belief[] = [
  {
    id: "what-it-is",
    index: "01",
    title: "What it is",
    body: "First came the AI that answers: you ask, it replies. Then the AI that helps: you connect your email and calendar, and it does the task. AI‑native is the next step. AI moves from the product into the production layer of the company: how it builds, sells, supports customers, and learns. A chatbot in the product, a copilot for sales, an assistant that writes the emails. That is the old structure with a new tool.",
  },
  {
    id: "the-mistake",
    index: "02",
    title: "The mistake",
    body: "When agents you could run on an ordinary computer arrived at the start of 2026, I built a CMO agent, a CFO agent, and an analyst agent, and recreated my org chart with an agent in every seat. It didn't work. I was using a new tool to rebuild an old model. An AI‑native company asks a different question: if you drew this business from zero today, with AI as part of the operation, what would it look like?",
  },
  {
    id: "why-it-matters",
    index: "03",
    title: "Why it matters",
    body: "Much of what we call management — the meetings, the handoffs, the controls — exists to stop the broken telephone. An insight from a customer passes along a chain of people, and what ships isn't what the market asked for. When one system carries that insight from the conversation to the product, most of that risk goes away. The number to watch isn't headcount. It's what each person achieves with AI. When agents execute, a person's value moves to deciding what should exist and catching what the agents miss. AI amplifies what each person brings. It doesn't fill the gaps a team has. It also removes the buffer: you now move faster in the right direction, and just as fast in the wrong one.",
  },
  {
    id: "why-now",
    index: "04",
    title: "Why now",
    body: "Earlier waves made one function cheap at a time: servers, payments, prototyping, content. AI presses on many at once: building, validating, selling, supporting, operating, and learning. When a product goes from two months to two hours, the scarce thing is no longer building. It's judgment about what's worth building. That is why we'll see fewer people per company, and many more companies. Starting a company today and leaving AI out of the operating model is no longer a neutral decision. It means accepting a disadvantage from the first day.",
  },
];

export type TalkLink = {
  href: string;
  label: string;
};

export type Talk = {
  id: string;
  index: string;
  /** The one format line. No durations, no run of show. */
  format: string;
  title: string;
  audience: string;
  idea: string;
  takeaways: string[];
  /** Optional proof line, not an agenda. */
  note?: string;
  links?: TalkLink[];
};

export const TALKS: Talk[] = [
  {
    id: "org-chart",
    index: "01",
    format: "Keynote",
    title: "Don't rebuild your org chart with agents",
    audience: "C-level teams and family businesses",
    idea: "Most companies are adding AI to the structure they already have, and getting an upgrade. This keynote is about the redesign: what a company looks like when it's drawn around AI from the start, and what that means for leaders who can't start from zero.",
    takeaways: [
      "The difference between adding AI and being AI‑native, and why one assistant per seat is the old org chart again.",
      "Where the broken telephone is costing them, and which processes to hand to AI first.",
      "Why output per person is a better measure than headcount, and where human approval has to stay.",
    ],
  },
  {
    id: "from-answers-to-work",
    index: "02",
    format: "Workshop",
    title: "AI-Native Startups: From AI That Answers to AI That Works",
    audience: "founders, operators, and investors",
    idea: "I open the hood on ENYA Ventures and show, on my own work, AI doing the job: research, meeting prep, and the relationship memory behind the fund. What works, what doesn't yet, and what it takes to set something like it up. No technical background needed.",
    takeaways: [
      "How to build a shared memory that every agent works from, so the knowledge becomes the asset rather than any single tool.",
      "Why to design agents by objective rather than by job title, and when one agent is better than many.",
      "A realistic picture of the effort: this isn't plug-and-play, and the value shows up after months of feeding the system and correcting it.",
    ],
    note: "Given at Mexico Tech Week 2026. Next, in Miami:",
    links: [
      {
        href: "https://luma.com/d7vjc7c7",
        label: "Venture Summit, 27 Jan 2027",
      },
      {
        href: "https://luma.com/62jtm2ad",
        label: "Venture Week, 24 Feb 2027",
      },
    ],
  },
  {
    id: "fertile-ground",
    index: "03",
    format: "Fireside or panel",
    title: "Fertile ground: AI‑native companies from Latin America",
    audience: "investors, LPs, corporate venture, and ecosystem builders",
    idea: "AI‑native company-building rewards what constrained markets have always trained founders to do: learn fast, spend little, and don't mistake motion for progress. This conversation is about why that makes Latin America fertile ground, and what kinds of companies it makes possible when building gets cheap.",
    takeaways: [
      "Why constrained markets may favor AI‑native founders more than capital-rich ones do.",
      "Where defensibility moves once software is cheap to build: workflows, distribution, operational data, and trust in regulated processes.",
      "Why cheap building means more founders and more companies, and what a small founding team needs most: shared criteria, alignment, and coverage of the business.",
    ],
  },
];

/** Official marks, most recognized first. Intrinsic size keeps the strip from shifting. */
export const STAGES = [
  { name: "SXSW", src: "/images/logos/sxsw.svg", width: 268, height: 62 },
  { name: "Visa", src: "/images/logos/visa.svg", width: 1000, height: 325 },
  { name: "BTG Pactual", src: "/images/logos/btg.svg", width: 398, height: 158 },
  { name: "Banco Davivienda", src: "/images/logos/davivienda.webp", width: 494, height: 42 },
  { name: "Florida International University", src: "/images/logos/fiu.webp", width: 344, height: 160, scale: 1.12 },
  { name: "University of Florida", src: "/images/logos/uf.svg", width: 264, height: 50 },
  { name: "FGV", src: "/images/logos/fgv.webp", width: 893, height: 160 },
  { name: "Startup Grind", src: "/images/logos/startup-grind.webp", width: 1080, height: 180 },
  { name: "Mexico Tech Week", src: "/images/logos/mxtw.svg", width: 160, height: 11 },
  { name: "ISDI", src: "/images/logos/isdi.webp", width: 155, height: 128, scale: 1.55 },
  { name: "Volcano Summit", src: "/images/logos/volcano.webp", width: 677, height: 96 },
  { name: "CAAAREM", src: "/images/logos/caaarem.webp", width: 271, height: 160, scale: 1.28 },
  { name: "ASEA", src: "/images/logos/asea.webp", width: 333, height: 96 },
  { name: "LIDE", src: "/images/logos/lide.webp", width: 332, height: 128 },
  { name: "Geneva Business School", src: "/images/logos/geneva.svg", width: 538, height: 147 },
  { name: "Uniandinos", src: "/images/logos/uniandinos.svg", width: 193, height: 45 },
  { name: "Cámara de Comercio de Cali", src: "/images/logos/cali.svg", width: 100, height: 28 },
  { name: "TradeHub Summit", src: "/images/logos/tradehub.svg", width: 183, height: 53 },
  { name: "D3 Bahamas", src: "/images/logos/d3.svg", width: 322, height: 50 },
  { name: "EspacioTec", src: "/images/logos/espaciotec.webp", width: 763, height: 96 },
] as const;

export type Essay = {
  href: string;
  title: string;
  body: string;
  /** Which talk this essay sits behind. */
  behind: string;
};

export const ESSAYS: Essay[] = [
  {
    href: ARTICLE_JUDGMENT_URL,
    title: "When building gets cheap, judgment is the company",
    body: "AI made building cheap. The scarce resource is judgment about what's worth building, and a team aligned on it. Criteria, alignment, and taste are what an AI‑native founding team is for.",
    behind: "Behind the keynote",
  },
  {
    href: ARTICLE_AI_NATIVE_URL,
    title: "What's an AI‑native startup?",
    body: "What the phrase means once you get past the label: a company designed around learning speed and small-team leverage, not a product with AI bolted on. Where the durable advantages move when software gets cheap to build.",
    behind: "Behind the workshop",
  },
  {
    href: ARTICLE_LATAM_URL,
    title: "A compelling case for pre-seed venture in Spanish-speaking Latin America",
    body: "Why the earliest stage in an overlooked region is a serious opportunity right now: the timing, and the founders.",
    behind: "Behind the fireside",
  },
];
