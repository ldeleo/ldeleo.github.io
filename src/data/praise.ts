/**
 * Praise wall — the only place quotes live.
 *
 * Every card ships as an obvious placeholder until a host approves a sentence.
 * Do not invent quote text. Suggested lines from outreach drafts do not belong here.
 *
 * To publish a real quote, edit this file only:
 * 1. Replace `quote` with the host's sentence, in their words.
 * 2. Fill `name` and `role` if they want to be named.
 * 3. Set `pending` to false.
 *
 * Pending cards render with a "Placeholder" label, dashed frame, and the
 * bracketed line below. Real cards render as a one-line quote with the
 * attribution underneath (name, org, event).
 */

export type PraiseItem = {
  /** Stable id. Keep it when the quote text changes. */
  id: string;
  /** The one-line quote, or a bracketed placeholder. */
  quote: string;
  /** Person's name, once they approve being named. */
  name?: string;
  /** Role, once known and approved. */
  role?: string;
  /** Organization or host. */
  org?: string;
  /** Event or city, short. */
  event?: string;
  /** True until a real, approved quote replaces the placeholder. */
  pending: boolean;
};

export const PRAISE: PraiseItem[] = [
  {
    id: "davivienda",
    quote: "[Quote pending — Davivienda]",
    org: "Banco Davivienda",
    event: "EspacioTec 2026",
    pending: true,
  },
  {
    id: "btg-pactual",
    quote: "[Quote pending — BTG Pactual]",
    org: "BTG Pactual",
    event: "Bogotá",
    pending: true,
  },
  {
    id: "volcano",
    quote: "[Quote pending — Volcano Innovation Summit]",
    org: "Volcano Innovation Summit",
    event: "2026",
    pending: true,
  },
  {
    id: "mexico-tech-week",
    quote: "[Quote pending — Mexico Tech Week]",
    org: "Mexico Tech Week",
    event: "2026",
    pending: true,
  },
  {
    id: "search-club",
    quote: "[Quote pending — Search Club / EspacioTec]",
    org: "Search Club",
    event: "EspacioTec",
    pending: true,
  },
  {
    id: "uniandinos",
    quote: "[Quote pending — Uniandinos]",
    org: "Uniandinos",
    event: "Bogotá",
    pending: true,
  },
  {
    id: "andrea-arnau",
    quote: "[Quote pending — Andrea Arnau]",
    name: "Andrea Arnau",
    pending: true,
  },
];

/** "Name, Role · Org · Event" — empty parts drop out. */
export function praiseAttribution(item: PraiseItem): string {
  const person = [item.name, item.role].filter(Boolean).join(", ");
  const place = [item.org, item.event].filter(Boolean).join(" · ");
  return [person, place].filter(Boolean).join(" · ");
}
