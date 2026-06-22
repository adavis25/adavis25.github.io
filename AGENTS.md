# AGENTS.md — adavis25.github.io Portfolio

## Agent Guidance

This file provides instructions for AI agents (Claude Code, Copilot, etc.) working in this repo.

---

## What This Repo Is
A static personal portfolio site for Alex Davis. Next.js 14 App Router + Tailwind CSS v4 + TypeScript. Deployed to GitHub Pages.

Read `CLAUDE.md` for full stack details, theme tokens, and project structure.

---

## Ground Rules

### Always
- Use `<Link>` from `next/link` for internal navigation — never bare `<a>` tags
- Use theme color classes (`text-cyber-accent`, `bg-cyber-card`, etc.) — never hardcode hex values in JSX
- Keep TypeScript strict — no `any` unless absolutely necessary
- Run `npm run lint` before considering a task done

### Never
- Add `tailwind.config.ts` — this project uses Tailwind v4 configured via `@theme` in `globals.css`
- Add inline `style={{}}` props for colors or spacing that could be Tailwind classes
- Install unnecessary packages — keep the bundle lean
- Use `<img>` — use Next.js `<Image>` from `next/image` for all images

---

## Adding New Pages
1. Create `app/<pagename>/page.tsx`
2. Export a default React component
3. Add a `<Link>` to it in `components/Navbar.tsx`
4. Follow the dark background + cyber theme — wrap content in a `<main className="min-h-screen bg-cyber-bg ...">` container

## Adding New Components
- Place in `/components/<ComponentName>.tsx`
- Use PascalCase filenames
- Keep components focused — one responsibility per file

## Theme Tokens
All custom colors are defined in `app/globals.css` under `@theme`. If you need a new color, add it there — don't hardcode values in components.

```css
@theme {
  --color-cyber-bg: #060606;
  --color-cyber-surface: #141414;
  --color-cyber-card: #1e1e1e;
  --color-cyber-border: #2a2a2a;
  --color-cyber-accent: #00d4ff;
  --color-cyber-green: #00ff9f;
  --color-cyber-muted: #888888;
  --color-cyber-text: #e0e0e0;
}
```

## Deployment Notes
- Static export only — no server-side features (no API routes, no `getServerSideProps`)
- `next.config.ts` must have `output: "export"`
- No `basePath` needed — this is a root GitHub Pages domain repo

## Current Pages
| Route | File | Status |
|---|---|---|
| `/` | `app/page.tsx` | ✅ Done — hero section |
| `/projects` | `app/projects/page.tsx` | 🚧 Planned |
| `/contact` | `app/contact/page.tsx` | 🚧 Planned |

## Current Components
| Component | File | Status |
|---|---|---|
| Navbar | `components/Navbar.tsx` | 🚧 Planned |