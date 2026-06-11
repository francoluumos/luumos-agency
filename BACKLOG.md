# BACKLOG — luumos.io agency site

Open threads and "might do" items. Pull from here into a session; move done items
out. See SESSION.md for the current pick-up point.

## SEO / GEO
- [x] **OG/social image** — `public/og-image.png` (2400×1260, on-brand) created 2026-06-11; referenced by `index.html` + `seo.ts`. Regenerate via `/tmp/og.html` + headless Chrome if the design changes.
- [ ] **Prerendering / SSG** — the site is a client-rendered SPA, so all content (incl. the FAQPage schema) is JS-rendered. Google renders JS, but for maximum AI-crawler/GEO pickup, add static prerendering (e.g. `vite-react-ssg`, `vite-plugin-prerender`, or a prerender step in the Vercel build). Highest-impact SEO follow-up.

## Pre-launch (from SESSION.md)
- [ ] Legal text (Impressum / AGB / Datenschutz) is a DRAFT — needs review by legal counsel.
- [ ] Confirm phone number (+41 79 845 11 77).
- [ ] Real Referenzen examples — the carousel currently uses invented placeholder projects (`referenzen.industries` in `src/i18n/locales/*`).
- [ ] "Cookie-Einstellungen" / withdraw-consent link (the privacy policy promises revocation; `resetConsent()` exists, just needs a footer trigger).
- [ ] Wire PostHog when ready: `npm i posthog-js`, set `VITE_POSTHOG_KEY` (Preview+Production), uncomment the init block in `src/lib/analytics.ts` (EU host).
