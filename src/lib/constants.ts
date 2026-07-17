/**
 * Single source for site strings and external URLs.
 * Do not redeclare these in components.
 */

export const SITE_URL = "https://lorenzodeleo.com";

export const BRAND_NAME_FULL = "Lorenzo de Leo";
export const BRAND_NAME_SHORT = "Lorenzo de Leo";
export const FOOTER_TAGLINE =
  "Operator-investor. Managing Director at ENYA Ventures. I build with AI, back founders who do the same, and teach what I learn along the way.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/lorenzodeleo/";
export const X_URL = "https://x.com/LorenzodeLeo_";
export const SUBSTACK_URL = "https://lorenzodeleo.substack.com";
export const ENYA_URL = "https://enya.vc";

export const ARTICLE_AI_NATIVE_URL =
  "https://lorenzodeleo.substack.com/p/whats-an-ai-native-startup";
export const ARTICLE_LATAM_URL =
  "https://lorenzodeleo.substack.com/p/a-compelling-case-for-pre-seed-venture";

export const CTA_PRIMARY = "Invite me to speak";
export const CTA_HREF = "/contact";

/**
 * Web3Forms access key — public-safe token that routes the contact form to
 * Lorenzo's inbox without exposing the address. Replace the placeholder with
 * the real key from web3forms.com before launch.
 */
export const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_KEY";

export const NAV_LINKS = [
  { href: "/speaking", label: "Speaking" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;

export const PAGE_TITLES = {
  home: "Lorenzo de Leo — Operator-investor. Speaker on AI-native organizations",
  speaking: "Speaking — Lorenzo de Leo",
  writing: "Writing — Lorenzo de Leo",
  about: "About — Lorenzo de Leo",
  contact: "Contact — Lorenzo de Leo",
} as const;

export const PAGE_DESCRIPTIONS = {
  home: "Operator-investor and Managing Director at ENYA Ventures. Talks and writing on AI-native organizations, startups, and the LatAm opportunity — from someone who runs his own fund with a team of AI agents.",
  speaking:
    "Keynotes, workshops, and courses on AI-native organizations, AI-native startups, and AI inside corporations. In English, Spanish, or Italian, grounded in practice rather than slides.",
  writing:
    "Essays on AI-native companies and pre-seed venture in Spanish-speaking Latin America, plus regular short-form writing on LinkedIn and X.",
  about:
    "From a PhD in pure mathematics to aerospace tech transfer, nine years co-building startups at Rokk3r, and now pre-seed investing at ENYA Ventures.",
  contact:
    "Invite Lorenzo to speak at your event, or get in touch about advising and collaboration.",
} as const;

/** Stages — kept as plain names, shown as a proof strip. */
export const STAGES = [
  "SXSW",
  "London Business School",
  "Forbes México",
  "FIU Executive Forum",
  "IDE Business School",
  "OpenExO",
  "ASEA",
  "CAAAREM",
  "Volcano Summit",
  "D3 Bahamas",
  "Ruptura Bolivia",
  "EspacioTec",
  "TradeHub",
] as const;
