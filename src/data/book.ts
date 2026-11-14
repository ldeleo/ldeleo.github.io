import {
  ARTICLE_AI_NATIVE_URL,
  ARTICLE_JUDGMENT_URL,
  ARTICLE_LATAM_URL,
} from "@/lib/constants";

export const BOOK_HREF = "/ai-native";
export const BOOK_TITLE = "The AI-Native Company";
export const SPINE =
  "AI-native means people and agents work as one system, and the advantage goes to whoever builds that system first.";

export type BookLink = {
  title: string;
  href: string;
  soon?: boolean;
};

export type BookTopic = {
  title: string;
  line: string;
  href?: string;
  /** Earlier writing that belongs to this topic. External. */
  source?: { title: string; href: string };
};

export const BOOK_TOPICS: BookTopic[] = [
  {
    title: "Definition",
    line: "What the phrase is being asked to mean, the definition this book uses, and seven questions about how far along a company is.",
    href: "/ai-native/definition",
    source: { title: "What's an AI-native startup?", href: ARTICLE_AI_NATIVE_URL },
  },
  {
    title: "Technology",
    line: "The tool downloads. The context doesn't. Where a company's memory lives, and who can read and write it.",
  },
  {
    title: "Judgment",
    line: "Who signs, and what a company decides not to automate.",
    source: {
      title: "When building gets cheap, judgment is the company",
      href: ARTICLE_JUDGMENT_URL,
    },
  },
  {
    title: "Organization",
    line: "How the company is shaped when you don't clone the old org chart.",
  },
  {
    title: "Building",
    line: "Starting this way, or getting there later.",
  },
  {
    title: "Investing",
    line: "The same design question, from Latin America, at the earliest stage.",
    source: {
      title: "A compelling case for pre-seed venture in Spanish-speaking Latin America",
      href: ARTICLE_LATAM_URL,
    },
  },
];

/** Previous and next stops for a topic slug such as `ai-native/definition`. */
export function bookNeighbors(slug: string): { prev: BookLink; next?: BookLink } {
  const index = BOOK_TOPICS.findIndex((topic) => topic.href === `/${slug}`);
  const book: BookLink = { title: "The book", href: BOOK_HREF };
  if (index < 0) {
    const first = BOOK_TOPICS[0];
    return { prev: book, next: first.href ? { title: first.title, href: first.href } : undefined };
  }
  const prevTopic = index === 0 ? book : toLink(BOOK_TOPICS[index - 1]);
  const nextTopic = BOOK_TOPICS[index + 1];
  return { prev: prevTopic, next: nextTopic ? toLink(nextTopic) : undefined };
}

function toLink(topic: BookTopic): BookLink {
  if (topic.href) return { title: topic.title, href: topic.href };
  return { title: topic.title, href: BOOK_HREF, soon: true };
}
