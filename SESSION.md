# Session log — luumos.io agency site

Working handoff so the next session can pick up fast. Last updated: **2026-06-10**.

---

## TL;DR — where we are
A bilingual (DE/EN) marketing landing page for **Luumos** is built and runs locally. It has a hero with an animated "tool-flow automation" visual, a full page shell (services, how-it-works, CTA, footer), an i18n system, and draft legal pages (Impressum / AGB / Datenschutz). **Nothing is committed to git yet** and **no deploy work has been done** (intentional — local-preview-first).

## How to run
```bash
cd ~/Documents/luumos-agency
npm install        # if needed
npm run dev        # vite dev server (was last on port 5182)
npm run build      # tsc + vite build — currently passes clean (exit 0)
```
Routes: `/` → redirects to detected lang (German default) → `/de` or `/en`.
Legal: `/de/impressum`, `/de/agb`, `/de/datenschutz` (and `/en/...`).

## Stack
Vite + React + TypeScript · react-router (path-based locales) · react-i18next (DE/EN).
Deploy target per `DEPLOY.md`: Vercel + Hostpoint, `staging`→`main` branch model, Basic-auth gate. **Do not deploy until Franco says so.**

---

## Done this session
- Cloned empty repo `git@github.com:francoluumos/luumos-agency.git` → `~/Documents/luumos-agency`. Moved `impeccable` + taste-skills out of the Obsidian vault into this repo (`.claude/.agents/.cursor`).
- `/impeccable init` → wrote **PRODUCT.md** (register=brand, audience, goal=book a consult).
- `/impeccable document` (seed) → wrote **DESIGN.md** (light Stripe/Mintlify canvas + rationed brand gradient).
- Built **hero** (nav, headline, CTAs) + the **input→AI core→output tool-flow visual** (inspired by a reference Franco liked; kept layout, dropped its orange/dark colors).
- Built **page shell**: TrustBar, Services, HowItWorks, CTA band, Footer.
- **Palette switch**: violet/magenta → **mid/dark-blue→bright-blue** gradient (`#1E40AF`→`#2563EB`→`#38BDF8`). Updated tokens, components, DESIGN.md.
- **Logo**: replaced approximation with the real spark geometry (6 rotated rounded rects) recolored to blue; updated `favicon.svg`. Added **black wordmark PNG** (`src/assets/luumos-wordmark-black.png`) next to spark in nav + footer.
- **i18n**: DE + EN, `/de` + `/en`, auto-detect with German fallback, hreflang/canonical (`src/seo.ts`), language switch **in the footer** (removed from nav). Removed "Sign in" from nav.
- **Positioning**: dropped Odoo focus → **general AI & automation** (services now: AI & workflow automation · custom AI agents · integration & custom builds).
- **Legal pages** (DE/EN, DRAFT): Impressum, AGB (adapted from braintec GTC in `legal/gtc/`), Datenschutz (GDPR + revDSG; covers PostHog EU-host, Google Analytics, Vercel hosting, cookies/consent). Footer links them.

## Key decisions
- Register: **brand**. Audience: AI-forward buyers + high-billing service SMBs (medical groups, architects, medtech, planning firms). Goal: **book a consult**.
- Aesthetic: light/airy, single rationed blue gradient accent, single sans (Geist), responsive (not flashy) motion, WCAG AA.
- German uses Swiss "ss" (no ß). German is the default/canonical language.

## ⚠️ Open follow-ups / to confirm
- [ ] **Phone number**: Franco wrote `+47 79 845 11 77`; `+47` = Norway. Set to **`+41 79 845 11 77`** (079 = Swiss mobile) — **needs confirmation**.
- [ ] **Legal text** is a DRAFT — Franco's legal expert must review before launch.
- [ ] **Cookie-consent banner** not built yet — required before GA/PostHog load in the EU.
- [ ] **Analytics not wired** yet — PostHog + Google Analytics are described in the privacy policy but not installed in code.
- [ ] **Vercel SPA rewrite** needed so `/de`, `/en`, `/de/agb` etc. resolve in production.
- [ ] **git**: nothing committed yet. Per DEPLOY.md, work on `staging`, never push `main` directly. Commit only when Franco asks.
- [ ] Optional: localize legal slugs for EN (e.g. `/en/privacy`), language switch on legal pages currently returns to home.
- [ ] Consider real integration logos vs current monoline tool icons in the hero (Franco's call).

## File map (key files)
- `PRODUCT.md`, `DESIGN.md`, `DEPLOY.md` — project context (root).
- `src/App.tsx` — router (LocaleLayout + nested routes), RootRedirect.
- `src/main.tsx` — BrowserRouter + i18n bootstrap.
- `src/i18n/index.ts`, `src/i18n/locales/{de,en}.ts` — i18n + all UI strings.
- `src/seo.ts` — `<html lang>`, canonical, hreflang.
- `src/components/` — Nav, Hero, FlowDiagram, TrustBar, Services, HowItWorks, CTA, Footer, Home, LegalPage, LanguageSwitcher, icons.
- `src/legal/company.ts` — company/legal constants (address, phone, email, UID).
- `src/legal/content.ts` — Impressum / AGB / Datenschutz text (DE + EN).
- `src/styles/index.css` — design tokens (brand gradient, neutrals, type, motion).
- `logo/` — wordmark source PNGs (black + white). `legal/gtc/` — braintec AGB PDFs (base).

## Suggested next steps
1. Confirm phone number; have legal expert review the drafts.
2. Build cookie-consent banner + wire PostHog (EU) and Google Analytics behind consent.
3. Add Vercel SPA rewrite; then do the gated deploy per DEPLOY.md when ready.
4. Polish pass on hero/sections (`/impeccable polish`), and decide on integration logos.
