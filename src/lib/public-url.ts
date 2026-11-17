/** Root-relative public file, prefixed with Astro's base (`/` or `/preview/`). */
export function publicUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${normalized}`;
}
