# Shrouk Muhammed — Portfolio

Vite + React. No UI framework; custom CSS, custom SVG diagrams. Runtime deps: `react`, `react-dom`, `qrcode`, two `@fontsource` fonts.

```bash
npm install
npm run dev       # local development
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Edit your details
Everything editable lives in `src/data/profile.js`:

- `email`, `phone`, `linkedin`, `github` — from your CV; change here if needed.
- `portfolioUrl` — **set this after deploying** (e.g. `https://shrouk.dev`). Until then the QR code
  points to whatever address the site is served from.
- `certifications[].url` — add a credential link to show a "Verify" button; none is invented.
- Replace the CV by overwriting `public/Shrouk-Muhammed-CV.pdf`.
- Diagram content: `src/data/diagrams.js`.

## Routes
- `/` — the full portfolio (sections 01–08).
- `/#/fair` — Job Fair mode: one-screen overview, project walkthrough, contact + QR.

## Deploy
`dist/` is a static site. Works as-is on Netlify, Vercel, Cloudflare Pages, GitHub Pages
(build command `npm run build`, output `dist`). Routing is hash-based, so no rewrite rules are needed.
After deploying, add `<link rel="canonical">` / `og:url` / `og:image` in `index.html` with the real URL.
