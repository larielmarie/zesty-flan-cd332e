# AGENTS.md

Architecture and conventions guide for AI agents working on this codebase.

## Project Overview

Single-page marketing website for **Advanced Furniture** — a commercial furniture installation company. The goal is lead generation via phone calls. No e-commerce, no auth, no database.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR/SSG via Vite) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Typography | Playfair Display (headlines) + Barlow Condensed (UI) via Google Fonts |
| Deployment | Netlify |

## Directory Structure

```
public/
  team-install.jpg        # Photo of crew installing furniture (brand photo)
  logo-sign.jpg           # Company logo/sign photo
src/
  routes/
    __root.tsx            # Root layout: font preloads, meta tags, SEO title
    index.tsx             # Full homepage — all sections in one file
  styles.css              # Tailwind import + CSS custom properties (brand colors)
netlify.toml              # Build config: vite build → dist/client
```

## Brand Tokens (CSS Custom Properties)

Defined in `src/styles.css` and registered as Tailwind theme tokens:

| Variable | Value | Usage |
|----------|-------|-------|
| `--maroon` | `#6B1A2A` | Primary brand color |
| `--maroon-dark` | `#4A1019` | Hero backgrounds, CTA |
| `--maroon-light` | `#8B2535` | Hover states |
| `--gold` | `#C9A227` | Accent, CTAs, highlights |
| `--gold-light` | `#E8BF45` | Labels on dark backgrounds |
| `--gold-dark` | `#A8841A` | Labels on light backgrounds |
| `--cream` | `#FAF7F0` | Page background |
| `--charcoal` | `#1C1C1C` | Footer |

Always use CSS variables via `style={{ color: 'var(--maroon)' }}` — not hardcoded hex values — so theme changes propagate everywhere.

## Homepage Sections (src/routes/index.tsx)

All sections live in one file as named component functions:

1. **NavBar** — Sticky maroon nav with logo and phone CTA
2. **Hero** — Full-screen, team photo background, headline + phone number
3. **StatsBar** — Gold bar with 4 credibility metrics
4. **Services** — 6-card grid (systems furniture, case goods, healthcare, gov, delivery, reconfigurations)
5. **WhyUs** — Checklist bullets + team photo with decorative gold accent
6. **Process** — 4-step numbered flow
7. **CTA** — High-contrast phone call section
8. **Footer** — Minimal: name, location, phone

## Key Constants

```ts
const PHONE = '850.390.3442'
const PHONE_HREF = 'tel:8503903442'
```

All phone number appearances must use these — never hardcode elsewhere.

## Conventions

- **Fonts:** `font-display` class → Playfair Display; `font-ui` class → Barlow Condensed
- **Colors:** Always use CSS variables, not hardcoded hex
- **Inline styles for brand colors:** Tailwind's JIT can't read CSS variables at build time, so brand colors go in `style={{}}` props
- **No routing:** This is a single-page site; no additional routes needed unless explicitly requested
- **No data layer:** All content is hardcoded in `index.tsx` arrays (`services`, `stats`, `whyUs`, `steps`)

## Non-Obvious Decisions

- Inline `style` attributes are used intentionally for dynamic CSS variable values — Tailwind's purge/JIT can't resolve arbitrary CSS var references in class names
- Google Fonts are loaded via `<link>` tags in `__root.tsx` head config (TanStack Start's `head()`) rather than `@import` to allow browser parallelization
- The hero background uses a CSS gradient overlay on the team photo for contrast, keeping the photo visible without sacrificing text legibility
