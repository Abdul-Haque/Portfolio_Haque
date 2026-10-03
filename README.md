# Portfolio — Next.js

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you publish — replace placeholders

- `app/layout.tsx` — title/description metadata
- `components/Hero.tsx` — name, tagline, stats, `/resume.pdf` link (add your resume file to `/public`)
- `components/About.tsx` — bio, quick facts
- `components/Experience.tsx` — real roles, dates, companies
- `components/Projects.tsx` — real projects, links, tags
- `components/Contact.tsx` — email, GitHub, LinkedIn
- `components/StackStrata.tsx` — adjust tools per layer if your stack differs

## Design system

- Colors, fonts: `tailwind.config.ts` + `app/layout.tsx` (next/font)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- Signature element: `components/StackStrata.tsx` — the layered stack
  cross-section used in both the Hero and the Stack section

## Deploy

Easiest path is Vercel: push to GitHub, then import the repo at
vercel.com/new. No config needed.
