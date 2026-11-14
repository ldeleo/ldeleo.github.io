// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { rehypeReading, rehypeTableWrap, remarkXref } from "./src/lib/remark-xref.mjs";

// Set only by the GitHub Pages job that publishes this branch at /preview.
// A normal build (and a future merge to the site root) leaves this unset.
const previewBase = process.env.PREVIEW_BASE === "/preview" ? "/preview" : undefined;

export default defineConfig({
  site: "https://lorenzodeleo.com",
  base: previewBase,
  output: "static",
  trailingSlash: "never",
  build: {
    // Keep CSS in the head. A stylesheet link after </body> paints the
    // page unstyled and shifts the whole viewport.
    inlineStylesheets: "always",
  },
  integrations: previewBase ? [] : [sitemap()],
  markdown: {
    remarkPlugins: [remarkXref],
    rehypePlugins: [rehypeTableWrap, rehypeReading],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
