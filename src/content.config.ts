import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const book = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/book" }),
  schema: z.object({
    title: z.string(),
    book: z.string(),
    topic: z.string(),
    slug: z.string(),
    lang: z.string().default("en"),
    description: z.string(),
    author: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    version: z.string(),
    keyPoints: z.array(z.string()).optional(),
    changelog: z.array(
      z.object({
        version: z.string(),
        date: z.string(),
        note: z.string(),
      })
    ),
  }),
});

export const collections = { book };
