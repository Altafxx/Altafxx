# Daniel Altaf — Portfolio (Next.js)

Personal portfolio website powering https://altafxx.github.io. Built with Next.js App Router and Tailwind CSS, designed in a bento-style layout optimized for desktop and mobile with consistent padding and larger components to reduce scrolling.

> Default route rewrites to `/v3` (latest UI).

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- React 18
- Tailwind CSS 3 + tailwindcss-animate + custom theme
- Radix UI primitives, Lucide icons
- Zustand (state)
- Embla Carousel (with autoplay)
- @vercel/og for dynamic Open Graph images

## Project Structure
- `src/app/(pages)/v1|v2|v3` — site versions; `/` rewrites to `/v3`
- `src/components/v3/*` — v3 UI components (cards, rails, stacks, etc.)
- `src/data/profile_v2.json` — profile, experience, skills, social links
- `src/styles/globals.css` — global styles
- `tailwind.config.ts` — theme, tokens, and plugins
- `next.config.js` — images unoptimized, root rewrite to `/v3`

## Local Development
```bash
# Install deps
npm install

# Start dev server
npm run dev
# http://localhost:3000
```

## Build
```bash
# Production build (SSR/ISR disabled in this project)
npm run build
```

## Contributors
- Daniel Altaf ([@Altafxx](https://github.com/Altafxx)) — <altafhasnan@gmail.com>

Attribution note: commit identities are unified via `.mailmap` and a history rewrite; some GitHub UI widgets may cache contributor data temporarily.
