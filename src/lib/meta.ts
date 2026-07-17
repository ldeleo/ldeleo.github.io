import { SITE_URL } from "./constants";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function canonicalUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ogImageUrl(): string {
  return `${SITE_URL}/og-default.png`;
}
