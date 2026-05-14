# SmartCloud - smartcloudsolutions.tech

Product-lab landing page for **Smart Cloud Solutions FZ-LLC**. Built as a
Next.js static export, deployed to GitHub Pages.

Live: <https://smartcloudsolutions.tech>

## Stack

- **Framework:** Next.js 14 (App Router) — `output: 'export'`
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + shadcn/ui (button, badge, separator, tooltip)
- **Fonts:** Geist Sans + Geist Mono
- **Icons:** lucide-react
- **Hosting:** GitHub Pages → CNAME `smartcloudsolutions.tech`

The visual direction (Product Lab, near-white tokens, sparse cool accent, proof
artifacts) and brand voice are documented in [`brand.md`](./brand.md). Treat
that file as the source of truth for any color, type, or copy decision.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000, or pass -- -p 4040
```

Useful scripts:

```bash
npm run build      # static export to ./out
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
node scripts/generate-og.mjs   # regenerate public/og.png from public/og.svg
```

## Repository layout

```
src/
├── app/
│   ├── layout.tsx       # fonts, metadata, skip-link
│   ├── page.tsx         # section composition only
│   └── globals.css      # tokens + base styles + reduced-motion guard
├── components/
│   ├── ui/              # shadcn primitives
│   ├── sections/        # Hero, Capabilities, SelectedWork, etc.
│   └── …                # layout primitives (Container, Nav, SiteFooter, Wordmark, …)
├── content/             # all copy lives here — edit without touching JSX
│   ├── pillars.ts       # the three buyer-facing offers
│   ├── projects.ts      # case-study rows + artifact metadata
│   ├── oss-stats.json   # proof bar
│   └── operators.ts     # About — Anmol + Rohit
└── lib/
    ├── site.ts          # site-level constants (urls, email, booking)
    └── utils.ts         # cn() helper
```

To change copy, edit the file in `src/content/`. To change visual direction,
edit `brand.md` and `src/app/globals.css` together. To add a section, drop a
component into `src/components/sections/` and reference it from `page.tsx`.

## Deployment

`.github/workflows/deploy.yaml` runs on every push to `main`:

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`
5. writes `CNAME` and `.nojekyll` into `./out`
6. publishes to the `gh-pages` branch via `peaceiris/actions-gh-pages`

The site is static — no API routes, no SSR, no middleware. Everything that
needs a server (booking, contact form) lives off-site (Cal.com, `mailto:`).

## Known follow-ups

- Wire the real Cal.com URL into `src/lib/site.ts` (`bookingUrl`).
- Replace `hello@smartcloudsolutions.tech` with the live address once mailbox
  is provisioned.
- Optional: add real product screenshots or repo cards to the hero artifact
  wall as they become available.
