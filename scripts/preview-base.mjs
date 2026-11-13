/**
 * After `PREVIEW_BASE=/preview astro build`, prefix root-relative URLs
 * and mark every HTML file noindex. Astro's `base` covers bundled CSS and
 * JS; handwritten href/src in pages and public HTML stay root-relative
 * unless rewritten here.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const robots = '<meta name="robots" content="noindex, nofollow">';

function rewrite(html) {
  let out = html.replace(
    /(\s(?:href|src)=["'])\/(?!preview\/)/g,
    "$1/preview/"
  );
  out = out.replace(
    /(=["']https:\/\/lorenzodeleo\.com)\/(?!preview\/)/g,
    "$1/preview/"
  );
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
