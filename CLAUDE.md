@AGENTS.md
# CLAUDE.md — adavis25.github.io Portfolio

## Project Overview
Personal developer portfolio for Alex Davis. Built with Next.js 14 (App Router), Tailwind CSS v4, and TypeScript. Deployed as a static site to GitHub Pages at https://adavis25.github.io.

## Stack
- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS v4 (configured via `globals.css` `@theme` block — no `tailwind.config.ts`)
- **Language:** TypeScript
- **Deployment:** GitHub Pages via static export (`next export`)
- **Package manager:** npm

## Commands
```bash
npm run dev       # local dev server
npm run build     # production build
npm run lint      # eslint
```

## Project Structure
```
app/
  layout.tsx        # root layout, metadata, global font/bg
  page.tsx          # hero / landing page
  globals.css       # Tailwind v4 @theme config + base styles
  /projects/
    page.tsx        # projects listing
  /contact/
    page.tsx        # contact page
components/
  Navbar.tsx        # top nav, shared across all pages
public/             # static assets (images, resume PDF, etc.)
```

## Theme (Cyborg-inspired)
Defined in `app/globals.css` under `@theme`. Use these classes throughout:

| Token | Value | Usage |
|---|---|---|
| `bg-cyber-bg` | `#060606` | Page background |
| `bg-cyber-surface` | `#141414` | Section backgrounds |
| `bg-cyber-card` | `#1e1e1e` | Card backgrounds |
| `border-cyber-border` | `#2a2a2a` | Borders, dividers |
| `text-cyber-accent` | `#00d4ff` | Cyan accent, CTAs |
| `text-cyber-green` | `#00ff9f` | Secondary accent |
| `text-cyber-muted` | `#888888` | Subtitles, captions |
| `text-cyber-text` | `#e0e0e0` | Body text |

## Fonts
- **Sans:** Inter (body, headings)
- **Mono:** JetBrains Mono (labels, code, accents)
- Loaded via Google Fonts in `globals.css`

## Routing
- Uses Next.js `<Link>` for all internal navigation (not `<a>` tags)
- Pages live under `app/` following App Router conventions

## GitHub Pages Deployment
This is a root domain repo (`adavis25.github.io`) so no `basePath` is needed.
Static export config should be set in `next.config.ts`:
```ts
const nextConfig = {
  output: "export",
};
```
Deploy via `gh-pages` branch or GitHub Actions.

## Style Preferences
- Minimal, dark aesthetic — Cyborg theme
- Tailwind utility classes preferred over custom CSS
- Components go in `/components`, pages go in `/app`
- Keep components small and single-purpose
- No unnecessary dependencies