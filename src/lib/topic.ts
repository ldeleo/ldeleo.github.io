/** GitHub-style heading ids, matching Astro's markdown renderer. */
export function headingSlug(text: string, seen: Map<string, number>): string {
  const base = text
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

/** Keep "AI-native" on one line inside headings and the contents list. */
export function keepCompound(text: string): string {
  return text.replace(/AI-([Nn]ative)/g, "AI\u2011$1");
}

export function topicHeadings(markdown: string): { text: string; id: string }[] {
  const seen = new Map<string, number>();
  const headings: { text: string; id: string }[] = [];
  for (const line of markdown.split("\n")) {
    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    const text = match[1].replace(/\\/g, "");
    headings.push({ text, id: headingSlug(text, seen) });
  }
  return headings;
}

/** "2026-11-13" → "Nov 13, 2026", without a timezone shift. */
export function formatTopicDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Silent-reading rate from Brysbaert, 2019. */
export function readingMinutes(markdown: string): number {
  const words = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_[\]()`|-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  return Math.max(1, Math.round(words / 238));
}

export function workingDefinition(markdown: string): string {
  const match = markdown.match(/^>\s+\*\*(.+?)\*\*\s*$/m);
  return match?.[1] ?? "";
}
