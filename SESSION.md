# SESSION — luumos.ch agency site

Read this first on a new start; update it at the end of every session. The full
roadmap lives in **BACKLOG.md**; infra/gating in **DEPLOY.md**.

## ▶ Pick up here — as of 2026-06-11

**State (all committed + pushed to `staging` AND `main`; tip `55b313a`):** the
bilingual (DE/EN) landing page is **deployed**. `main` → Vercel Production
(`luumos.ch`/`www.luumos.ch`), `staging` → Preview (`staging.luumos.ch`).
Production stays behind the Basic-auth gate as long as `SITE_PASSWORD` is set on
the Production scope — **go live = remove `SITE_PASSWORD` from Production only**
(DEPLOY.md §3).

**Live on the page:** hero + animated tool-flow visual · TrustBar (mobile
marquee) · Services · How-it-works · **Referenzen** (industry-card carousel,
touch-swipe + arrows) · CTA · **FAQ** (FAQPage schema) · footer. Header + footer
links anchor to sections. **Cookie consent** banner gates analytics. Full
**SEO/GEO** pass (meta, OG, JSON-LD, robots.txt, sitemap.xml, German keywords).
Scroll-reveal + button press animations. Booking links → Google Calendar.

**Domain: `luumos.ch`** (confirmed 2026-06-11 — NOT .io). All SEO uses it.

**Immediate next (pick any):** see BACKLOG.md. Highest-impact: add
`public/og-image.png` (1200×630); consider SSG/prerender (SPA hurts AI-crawler
pickup); replace invented Referenzen examples with real ones; legal review.

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
- `src/components/` — Nav, Hero, FlowDiagram, TrustBar, Services, HowItWorks, Referenzen, CTA, FAQ, Footer, CookieConsent, LegalPage, LanguageSwitcher, icons.
- `src/lib/{consent,analytics}.ts` — cookie consent + PostHog enable point.
- `src/legal/{company,content}.ts` — company constants + legal text.
- `public/{robots.txt,sitemap.xml,favicon.svg}` · `middleware.js` · `vercel.json`.

## Log (newest first)
### 2026-06-11 — Referenzen, FAQ, SEO/GEO, cookie consent → deployed to prod
- Referenzen carousel; header/footer section anchor-links; cookie-consent banner (analytics gated, PostHog-ready); FAQ + FAQPage schema; full SEO/GEO (meta/OG/JSON-LD/robots/sitemap, German keywords); scroll-reveal + press animations; mobile fixes; transparent logo; booking links. Promoted `staging`→`main` (`55b313a`).
### 2026-06-10 — git bootstrap + gated deploy setup
- Initial commit; `staging` pushed; `middleware.js` (Basic-auth) + `vercel.json` SPA rewrite added.
