# METALAB — Metallography Lab Instruments

Marketing site for a precision metallography lab equipment manufacturer.
Editorial dark-industrial aesthetic, scroll-driven animations, and a six-instrument catalogue covering the entire specimen preparation pipeline.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** (`@theme` tokens, custom utilities)
- **Motion** (Framer Motion v12 — scroll-linked + viewport reveals)
- **Lenis** (smooth scroll)
- **Lucide React** (icons)
- **Geist** + **Instrument Serif** typefaces

## Sections

1. Hero — editorial typography, animated microstructure preview, parallax data card
2. Trust marquee — partner lab logos
3. Product catalogue — six instruments with interactive detail panel
4. Pipeline — five-step sticky-scroll process diagram
5. Engineering specs — animated counters, certifications, operating envelope
6. Studio / About — philosophy and pillars
7. CTA — quotation request form
8. Footer — sitemap and giant display-type wordmark

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build        # static export → ./out
```

The build uses `next build --webpack` (instead of the default Turbopack) so the
exported chunk filenames are deploy-platform safe.

`next.config.ts` sets `output: "export"` — the site is fully static and can be
hosted on any CDN (Vercel, Netlify, Cloudflare Pages, S3, devinapps, etc).
To deploy with a dynamic runtime (e.g. Vercel SSR), remove `output: "export"`.

## Content

All product copy, process steps, and statistics live in `lib/data.ts`. Swap the
placeholder brand name (`METALAB`) by searching across:

- `app/layout.tsx` (metadata + html `lang`)
- `components/nav-bar.tsx`
- `components/sections/hero.tsx`
- `components/sections/footer.tsx`
- `lib/data.ts` (product names, partner names)

## File layout

```
app/
  layout.tsx        Root layout, fonts, Lenis + nav + glow + progress
  page.tsx          Section composition
  globals.css       Tailwind v4 theme + animations
components/
  lenis-provider    Smooth scroll
  nav-bar           Sticky nav with scroll-state
  sections/         Hero, trust, products, process, specs, about, cta, footer
  ui/               Reveal, Stagger, WordReveal, Magnetic, Marquee, GridPattern,
                    CursorGlow, ScrollProgress
lib/
  data.ts           Products, process steps, stats, trusted-by
  utils.ts          cn() helper
```
