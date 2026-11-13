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
      "En Davivienda estamos convencidos de que el futuro es emocionante, y conectar nuestra visión con aliados estratégicos nos impulsa a escalar iniciativas de alto impacto. Lorenzo ha potenciado nuestra propuesta de valor, al compartir con su destacado profesionalismo, el conocimiento de transformar la IA teórica en soluciones ágiles y escalables que transforma la experiencia de nuestros clientes y usuarios.",
    attribution:
      "Andrés Pineda, Gerente de Innovación y Operaciones, Banco Davivienda Salvadoreño",
    pending: false,
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
    quote:
      "Lorenzo nos abrió las puertas de ENYA Ventures y nos mostró en vivo cómo opera su fondo con agentes de IA. Salimos con muchas ideas sobre cómo aplicar estas herramientas en nuestros emprendimientos y en nuestro día a día.",
    attribution:
      "Eduardo Hernández Fuentes, Founders & Investors House, Mexico Tech Week",
    pending: false,
  },
  {
    id: "search-club-roberto",
    quote:
      "Lorenzo es de esas mentes que siempre están un paso adelante, que saben qué es lo que viene y te ayudan a mantenerte en la jugada. Hemos trabajado juntos en varios proyectos, entre ellos ESPACIOTEC, un certamen de emprendimiento en Centroamérica que venimos impulsando desde hace cinco años.",
    attribution:
      "Roberto López Castellanos, CEO & Co-founder, Search Club / EspacioTec",
    pending: false,
  },
  {
    id: "search-club-erick",
    quote:
      "Lorenzo nos ha apoyado muchísimo desde hace 4 años con el corazón de Espaciotec: la formación para los emprendedores. Siempre tuvimos la visión que una de las maneras más eficientes de apoyar a un emprendedor en etapa temprana era ayudarles a formarse en pilares básicos del mundo del emprendimiento, su experiencia ha sido de mucho valor para el programa.",
    attribution: "Erick Alvarez, Co-founder, Search Club / EspacioTec",
    pending: false,
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
    quote:
      "Lorenzo's approach to complex concepts is transformative, turning bewildering ideas into empowering knowledge for all audiences.",
    attribution: "Andrea Arnau, investor, Shark Tank celebrity",
    pending: false,
  },
];

/** "Name, Role · Org · Event" — empty parts drop out. Approved lines use `attribution`. */
export function praiseAttribution(item: PraiseItem): string {
  if (item.attribution) return item.attribution;
  const person = [item.name, item.role].filter(Boolean).join(", ");
  const place = [item.org, item.event].filter(Boolean).join(" · ");
  return [person, place].filter(Boolean).join(" · ");
}
