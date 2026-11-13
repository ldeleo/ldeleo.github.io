/**
 * Praise wall — the only place quotes live.
 *
 * Real quotes are the host's words, verbatim. Do not edit them.
 * A card with `pending: true` is not a quote yet. It renders with a
 * "Placeholder" label, a dashed frame, and the bracketed line.
 *
 * To publish a pending quote, edit this file only:
 * 1. Replace `quote` with their sentence, in their words and language.
 * 2. Set `attribution` to the line they approved.
 * 3. Set `pending` to false.
 */

export type PraiseItem = {
  /** Stable id. Keep it when the quote text changes. */
  id: string;
  /** The quote, or a bracketed placeholder. */
  quote: string;
  /** Person's name, once they approve being named. */
  name?: string;
  /** Role, once known and approved. */
  role?: string;
  /** Organization or host. */
  org?: string;
  /** Event or city, short. */
  event?: string;
  /**
   * Full credit line when a host has approved one.
   * Used instead of the composed name / org / event line.
   */
  attribution?: string;
  /** True until a real, approved quote replaces the placeholder. */
  pending: boolean;
};

export const PRAISE: PraiseItem[] = [
  {
    id: "davivienda",
    quote:
      "Lorenzo showed us how to turn AI theory into agile, scalable solutions that transform the experience of our customers and users, and it strengthened our value proposition.",
    attribution:
      "Andrés Pineda, Innovation & Operations Manager, Banco Davivienda Salvadoreño",
    pending: false,
  },
  {
    id: "btg-pactual",
    quote:
      "A talk that put a pragmatic approach to AI on the table, along with what it means to be AI-native, as a starting point for a new generation of entrepreneurs.",
    attribution:
      "Luisa Plazas, Executive Director, Marketing and Communications, BTG Pactual Colombia",
    pending: false,
  },
  {
    id: "volcano",
    quote: "[Quote pending]",
    org: "Volcano Innovation Summit",
    // When a line arrives: Janma Bardi, Founder & Co-Chair, Volcano Summit
    pending: true,
  },
  {
    id: "eduardo-hernandez",
    quote:
      "Lorenzo opened the doors of ENYA Ventures and showed us, live, how his fund runs on AI agents. We left with a lot of ideas for applying these tools in our startups and in our day-to-day work.",
    attribution: "Eduardo Hernández Fuentes, Partner, LeapstartMx",
    pending: false,
  },
  {
    id: "search-club-roberto",
    quote:
      "Lorenzo is one of those minds that is always a step ahead. He knows what's coming and helps you stay in the game.",
    attribution: "Roberto López Castellanos, CEO & Co-Founder, Search Club",
    pending: false,
  },
  {
    id: "uniandinos",
    quote: "[Quote pending]",
    org: "Uniandinos",
    event: "Bogotá",
    pending: true,
  },
  {
    id: "andrea-arnau",
    quote:
      "Lorenzo's approach to complex concepts is transformative, turning bewildering ideas into empowering knowledge for all audiences.",
    attribution: "Andrea Arnau, investor, Shark Tank celebrity",
    pending: false,
  },
];

/** Quiet line under the bio. Not part of the praise wall. */
export const BIO_NOTE: PraiseItem = {
  id: "search-club-erick",
  quote:
    "For five years, Lorenzo has supported the heart of EspacioTec: training our entrepreneurs. We've always believed that one of the best ways to back an early-stage founder is to help them master the fundamentals, and his experience has been invaluable to the program.",
  attribution: "Erick Alvarez, Co-Founder, Search Club",
  pending: false,
};

/** "Name, Role · Org · Event" — empty parts drop out. Approved lines use `attribution`. */
export function praiseAttribution(item: PraiseItem): string {
  if (item.attribution) return item.attribution;
  const person = [item.name, item.role].filter(Boolean).join(", ");
  const place = [item.org, item.event].filter(Boolean).join(" · ");
  return [person, place].filter(Boolean).join(" · ");
}
