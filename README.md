# lorenzodeleo.com

Lorenzo de Leo's site. The page is built around the AI-native thesis: he invests in it (ENYA Ventures), speaks about it, and writes about it. Speaking is the bookable action. This is not a services site.

## Stack

Astro 5, TypeScript strict, Tailwind 4. Static output, deployed to GitHub Pages from `main` only. Preview work stays on a branch.

## Development

```
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Structure

The home page is the site, in this order: hero, who he is, the thesis, three talks, a praise wall, stages, a reel slot, the essays, and a booking form.

| URL | What it is |
|---|---|
| `/` | The full argument |
| `/speaking` | Talks, praise, stages, reel, booking |
| `/writing` | The essays, framed as ideas behind the talks |
| `/about` | Short bio. "A decade" at Rokk3r in prose |
| `/contact` | The same booking form |
| `/espaciotec/metricas` | EspacioTec metrics catalogue, in Spanish. Unlisted |
| `/links.html` | ENYA link page for a QR code. Unlisted |

Copy for talks, beliefs, stages, and essays lives in `src/data/content.ts`. Praise-wall placeholders live only in `src/data/praise.ts`.

## Photos

Solo shots only. Volcano Innovation Summit 2026 opening words, credited "Photo: Volcano Summit":

- `public/images/volcano-2026-hero.jpg` — DSC08050, the hero
- `public/images/volcano-2026-gesture.jpg` — DSC08051, the reel still
- `public/images/volcano-2026-alt.jpg` — DSC08049, an alternate from the same set, not placed on a page

`d3.jpg` and `agora.jpg` were removed because another person is in the frame. `hero.jpg`, `stage.jpg`, `workshop.jpg`, and `portrait.jpg` remain in the repo. The first three are not used on the new pages. `workshop.jpg` shows a seated audience, not a second speaker.

## Notes

- Booking form: Web3Forms, plus a mailto to `lorenzodeleo.usa@gmail.com`. No fees, no packages.
- "Managing Director", never "GP".
- Deploy workflow and `public/CNAME` are production. Don't change them from a preview branch.
