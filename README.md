# Advanced Furniture — Commercial Furniture Installation

Marketing website for **Advanced Furniture**, a commercial furniture installation company serving Pensacola, FL and the Gulf Coast region.

## About

This is a single-page marketing site built to convert B2B leads via phone calls. It showcases the company's services, credibility stats, process, and contact information prominently throughout.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Frontend | React 19 + TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Typography | Playfair Display + Barlow Condensed (Google Fonts) |
| Deployment | Netlify |
| Language | TypeScript 5.7 (strict) |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at **http://localhost:3000** (or port 8888 via Netlify CLI).

### Using Netlify CLI (recommended)

```bash
netlify dev
```

This emulates the Netlify platform locally at **http://localhost:8888**.

## Build

```bash
npm run build
```

Output goes to `dist/client/` as configured in `netlify.toml`.
