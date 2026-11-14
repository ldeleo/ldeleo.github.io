/**
 * Single source for site strings and external URLs.
 * Do not redeclare these in components.
 */

export const SITE_URL = "https://lorenzodeleo.com";

export const BRAND_NAME_FULL = "Lorenzo de Leo";
export const BRAND_NAME_SHORT = "Lorenzo de Leo";
export const FOOTER_TAGLINE =
  "Managing Director of ENYA Ventures, an AI-native pre-seed fund for Latin America. I speak and write about the redesign that takes.";

/** Speaking inquiries. Shown on the booking block; the form also delivers here. */
export const SPEAKING_EMAIL = "lorenzodeleo.usa@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/lorenzodeleo/";
export const X_URL = "https://x.com/LorenzodeLeo_";
export const SUBSTACK_URL = "https://lorenzodeleo.substack.com";
export const ENYA_URL = "https://enya.vc";

export const ARTICLE_JUDGMENT_URL =
  "https://lorenzodeleo.substack.com/p/when-building-gets-cheap-judgment";
export const ARTICLE_AI_NATIVE_URL =
  "https://lorenzodeleo.substack.com/p/whats-an-ai-native-startup";
export const ARTICLE_LATAM_URL =
  "https://lorenzodeleo.substack.com/p/a-compelling-case-for-pre-seed-venture";

export const CTA_PRIMARY = "Invite Lorenzo";
export const CTA_FULL = "Invite Lorenzo to speak";
export const CTA_HREF = "/contact";

/**
 * Web3Forms access key — public-safe token that routes the booking form to
 * Lorenzo's inbox. The address itself is also shown, for organizers who prefer mail.
 */
export const WEB3FORMS_ACCESS_KEY = "778c9787-a8c2-422f-8cb9-0ae21af4d276";

export const NAV_LINKS = [
  { href: "/speaking", label: "Speaking" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const PAGE_TITLES = {
  home: "Lorenzo de Leo — Adding AI is an upgrade. Being AI‑native is a redesign.",
  speaking: "Talks — Lorenzo de Leo",
  writing: "Ideas — Lorenzo de Leo",
  about: "About — Lorenzo de Leo",
  book: "The AI-Native Company — Lorenzo de Leo",
  contact: "Invite Lorenzo to speak",
  espaciotecMetricas: "Catálogo de métricas — EspacioTec 2026",
} as const;

export const PAGE_DESCRIPTIONS = {
  home: "Adding AI to a company is an upgrade. Being AI‑native is a redesign. Lorenzo de Leo, Managing Director of ENYA Ventures, on the thesis — for leadership teams, founders, and investors. English, Spanish, or Italian.",
  speaking:
    "Three talks, one thesis: the AI‑native redesign. A keynote for leadership teams, a workshop for founders and investors, and a fireside on Latin America. English, Spanish, or Italian.",
  writing:
    "Essays behind the talks: what AI‑native means, why judgment is the scarce resource, and the earliest stage in Spanish-speaking Latin America.",
  about:
    "Lorenzo de Leo is Managing Director of ENYA Ventures, an AI-native pre-seed fund for Latin America he is building. Mathematics, a decade of company building, and a fund shaped around the thesis.",
  book: "The AI-Native Company. Coming soon.",
  contact:
    "Invite Lorenzo de Leo to speak. Share the date, the audience, and the outcome you want the room to leave with. Speaker kit available on request.",
  espaciotecMetricas:
    "Qué métricas mirar según el tipo de negocio y la etapa de tu startup. Referencia de la Masterclass 4 de EspacioTec 2026: 15 tipos de negocio, tres etapas, y qué te dice cada señal.",
} as const;
