/**
 * After `PREVIEW_BASE=/preview astro build`, prefix root-relative URLs
 * and mark every HTML file noindex. Astro's `base` covers bundled CSS and
 * JS. Handwritten root-relative URLs, including srcset candidates, are
 * prefixed here when a page did not already use the base path.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const robots = '<meta name="robots" content="noindex, nofollow">';

function prefixRoot(url) {
  if (!url.startsWith("/") || url.startsWith("//") || url.startsWith("/preview/")) return url;
  return `/preview${url}`;
}

/** srcset is a comma-separated list of URL plus an optional descriptor. */
function prefixSrcset(value) {
  return value.replace(/(^|,)\s*(\/(?!\/|preview\/)\S+)/g, (match, lead, url) => match.replace(url, prefixRoot(url)));
}

function rewrite(html) {
  const held = [];
  let out = html.replace(/<link\b[^>]*hreflang=["']es["'][^>]*>/gi, (tag) => {
    held.push(tag);
    return `<!--HREFLANG_ES_${held.length - 1}-->`;
  });
  out = out.replace(
    /(\s(?:href|src|poster)=["'])\/(?!preview\/)/g,
    "$1/preview/"
  );
  out = out.replace(/\s(srcset|imagesrcset)=(["'])([\s\S]*?)\2/gi, (full, name, quote, value) => {
    const lead = full.slice(0, full.indexOf(name));
    return `${lead}${name}=${quote}${prefixSrcset(value)}${quote}`;
  });
  out = out.replace(/url\((['"]?)(\/(?!\/|preview\/)[^)'"]+)\1\)/g, (_, quote, url) => `url(${quote}${prefixRoot(url)}${quote})`);
  out = out.replace(
    /(=["']https:\/\/lorenzodeleo\.com)\/(?!preview\/)/g,
    "$1/preview/"
  );
  out = out.replace(/<!--HREFLANG_ES_(\d+)-->/g, (_, index) => held[Number(index)]);
  if (!/name=["']robots["']/i.test(out)) {
    out = out.replace(/<head([^>]*)>/i, `<head$1>\n    ${robots}`);
  }
  return out;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

const htmlFiles = await walk(dist);
let changed = 0;
for (const file of htmlFiles) {
  const before = await readFile(file, "utf8");
  const after = rewrite(before);
  if (after !== before) {
    await writeFile(file, after);
    changed += 1;
  }
  if (!after.includes('name="robots" content="noindex, nofollow"')) {
    console.error(`Missing noindex: ${file}`);
    process.exit(1);
  }
}

const all = await readdir(dist, { recursive: true });
const sitemap = all.filter((name) => String(name).includes("sitemap"));
if (sitemap.length) {
  console.error(`Preview build emitted a sitemap: ${sitemap.join(", ")}`);
  process.exit(1);
}
console.log(`Marked ${changed} preview HTML files noindex under /preview/.`);
