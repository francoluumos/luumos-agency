# SESSION — luumos.ch agency site

Read this first on a new start; update it at the end of every session. The full
roadmap lives in **BACKLOG.md**; infra/gating in **DEPLOY.md**.

## ▶ Pick up here — as of 2026-06-12

**State (all committed + pushed to `staging` AND `main`; tip `ceba9f0`):** the
bilingual (DE/EN) landing page is **deployed**. `main` → Vercel Production
(`luumos.ch`/`www.luumos.ch`), `staging` → Preview (`staging.luumos.ch`).
Production stays behind the Basic-auth gate as long as `SITE_PASSWORD` is set on
the Production scope — **go live = remove `SITE_PASSWORD` from Production only**
(DEPLOY.md §3).

**Live on the page:** hero + animated tool-flow visual · **"Live ansehen"** video
modal (animated explainer, `public/motion.html`, DE/EN) · TrustBar (mobile
marquee) · Services · How-it-works · **Referenzen** (industry-card carousel,
touch-swipe + arrows) · CTA · **FAQ** (FAQPage schema) · footer. Header + footer
links anchor to sections. **Cookie consent** banner gates analytics. Full
**SEO/GEO** pass (meta, OG image, JSON-LD, robots.txt, sitemap.xml, German
keywords). Scroll-reveal + button press animations. Booking links → Google Cal.

**Tests:** Playwright **E2E harness** (5 browsers, preview port 4181) — `npm test`,
99 pass. See **TESTING.md**. CI runs on push/PR to main+staging; a pre-push hook
runs it locally too (`core.hooksPath .githooks`; skip with `SKIP_E2E_HOOK=1`).

**Domain: `luumos.ch`** (confirmed — NOT .io). All SEO uses it.

**⚠️ Immediate next:** **restart Claude Code** (or `/mcp` → reconnect) to load the
**Playwright MCP** (`.mcp.json`) — needed to drive a live browser when authoring
specs. Then see BACKLOG.md: SSG/prerender · real Referenzen examples · legal
review · wire PostHog · cookie-withdraw link.

## How to run / deploy
```bash
cd ~/Documents/luumos-agency
npm run dev      # vite dev (last on :5173)
npm run build    # tsc + vite build — passes clean
```
- Work on `staging`; promote to `main` (`git merge --ff-only staging`). Push uses
  the **`github.com-luumos`** SSH alias → `id_ed25519_luumos` (passphrase-
  protected; `ssh-add --apple-use-keychain` it first — Claude can't enter it).
- Routes: `/` → detected lang → `/de` or `/en`. Legal: `/de/{impressum,agb,datenschutz}`.
- SPA routing handled by `vercel.json` rewrite; Basic-auth gate in `middleware.js`.

## Stack
Vite + React + TS · react-router (path locales) · react-i18next (DE/EN).
German default/canonical, Swiss "ss" (no ß), formal "Sie". Brand register, light/
airy, single blue gradient accent (`#1E40AF`→`#2563EB`→`#38BDF8`), Geist.

## ⚠️ Open follow-ups
- [ ] **GitHub repo is PUBLIC** — source incl. DRAFT legal text is world-readable. Decide: private pre-launch, or accept.
- [ ] **Legal text** is a DRAFT — needs legal-counsel review before launch.
- [ ] **og-image.png** + **SSG/prerender** — see BACKLOG.md.
- [ ] **Referenzen examples** are invented placeholders (`referenzen.industries` in i18n).
- [ ] **PostHog** not wired yet — enable point ready in `src/lib/analytics.ts`.
- [ ] **Cookie-withdraw link** — `resetConsent()` exists; needs a footer trigger.

## File map (key files)
- `PRODUCT.md` `DESIGN.md` `DEPLOY.md` `BACKLOG.md` — project context (root).
- `index.html` — static meta + OG + Organization/WebSite JSON-LD.
- `src/App.tsx` — router + LocaleLayout (mounts CookieConsent). `src/seo.ts` — per-locale head.
- `src/i18n/locales/{de,en}.ts` — **all UI copy** (parallel DE/EN).
- `src/components/` — Nav, Hero, FlowDiagram, TrustBar, Services, HowItWorks, Referenzen, CTA, FAQ, Footer, CookieConsent, DemoModal, LegalPage, LanguageSwitcher, icons.
- `src/lib/{consent,analytics}.ts` — cookie consent + PostHog enable point.
- `src/legal/{company,content}.ts` — company constants + legal text.
- `public/{robots.txt,sitemap.xml,og-image.png,favicon.svg,motion.html,luumos-wordmark.png}` · `middleware.js` · `vercel.json`.
- **Tests:** `TESTING.md` · `playwright.config.ts` · `tests/` · `scripts/test-archive.mjs` · `.githooks/pre-push` · `.github/workflows/e2e.yml` · `.mcp.json`.

## Log (newest first)
### 2026-06-12 — "Live ansehen" video, OG image, copy polish, E2E harness
- "Live ansehen" → lightbox modal playing an animated explainer (`public/motion.html`, DE/EN, typewriter Minuten→Stunden). Modal scales the fixed 1280×720 iframe from React (ResizeObserver) → fills with no letterbox.
- OG/social image `public/og-image.png` (rendered via headless Chrome); un-gated og-image/robots/sitemap/favicon in `middleware.js`.
- Copy-editing pass (DE/EN) — stripped dev-jargon for the ICP.
- **Playwright E2E harness** ported from AIRLUXO + adapted (ports 4181/9381, no auth/data); specs in `tests/`, `TESTING.md`. All on `main`+`staging` (`ceba9f0`).
### 2026-06-11 — Referenzen, FAQ, SEO/GEO, cookie consent → deployed to prod
- Referenzen carousel; header/footer section anchor-links; cookie-consent banner (analytics gated, PostHog-ready); FAQ + FAQPage schema; full SEO/GEO (meta/OG/JSON-LD/robots/sitemap, German keywords); scroll-reveal + press animations; mobile fixes; transparent logo; booking links. Promoted `staging`→`main` (`55b313a`).
### 2026-06-10 — git bootstrap + gated deploy setup
- Initial commit; `staging` pushed; `middleware.js` (Basic-auth) + `vercel.json` SPA rewrite added.
