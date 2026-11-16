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
    line: 'What people mean when they say "AI-native", the definition this book uses, and seven questions that show how far along a company is.',
    href: "/ai-native/definition",
    source: { title: "What's an AI-native startup?", href: ARTICLE_AI_NATIVE_URL },
  },
  {
    title: "Technology",
    line: "Anyone can download the same tools, but nobody can download a company's context. This topic is about where a company's memory lives, and who, among its people and its agents, can read it and add to it.",
  },
  {
    title: "Judgment",
    line: "When an agent does the work, who signs for the result? And what does a company deliberately choose not to automate?",
    source: {
      title: "When building gets cheap, judgment is the company",
      href: ARTICLE_JUDGMENT_URL,
    },
  },
  {
    title: "Organization",
    line: "What a company looks like when it is designed around people and agents together, instead of copying the old org chart and adding AI to each box.",
  },
  {
    title: "Building",
    line: "Starting a company this way from the first day, or rebuilding an existing one to get there later, and what each path asks of the people doing it.",
  },
  {
    title: "Investing",
    line: "The same design question, seen from Latin America and from the earliest stage of a company, when its construction is still being decided.",
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
