# Testing — luumos.ch agency site

## Automated end-to-end tests (Playwright) — added 12 Jun 2026

Multi-browser E2E suite for the marketing site. Runs against a local production
preview (`vite preview`, **no password gate, no network deps**) by default; point
at another env with `BASE_URL` (+ `BASIC_AUTH=user:pass` for the gated staging).

This is a **public, static marketing SPA** — no auth, no database, no payment. So
there are no login fixtures or data-dependent flows: every spec runs across every
browser, unauthenticated.

- **Browsers:** chromium · firefox · webkit (Desktop Safari) · mobile-chrome (Pixel 7) · mobile-safari (iPhone 14).
- **Run:** `npm test` (all), `npm run test:chromium` (fast single-browser), `npm run test:ui` (interactive), `npm run test:report` (open last HTML report), `npm run test:archive` (run + snapshot the report into a kept folder — see below).
- **Config:** `playwright.config.ts`. **Specs:** `tests/`. **Preview port: 4181** (pinned in `vite.config.ts`, `strictPort`). The HTML report + traces (on retry) are the record of what passed, when, on which browser.
- **CI:** `.github/workflows/e2e.yml` runs on every push/PR to `main`/`staging` and uploads the report artifact. No secrets needed (nothing data-dependent).

**Flows covered (`tests/`):**
- `smoke.spec.ts` — every route (`/`, `/de`, `/en`, `/de/{impressum,agb,datenschutz}`, `/en/datenschutz`) mounts with a **non-empty `#root` and no uncaught JS errors** — guard against white-page crashes.
- `nav.spec.ts` — booking CTAs link to the Google booking URL (`target=_blank`, `rel=noopener`); header anchor links point to `#services`/`#how`/`#referenzen` and scroll the section into view (desktop only — nav links are hidden ≤900px).
- `i18n.spec.ts` — German is default (`<html lang="de">`, "Beratung buchen"); the footer language switch flips DE → EN (URL, `<html lang>`, and CTA copy).
- `faq.spec.ts` — accordion opens one item at a time; the **FAQPage JSON-LD** is present in the DOM.
- `referenzen.spec.ts` — the carousel renders one card per industry (5); the next arrow advances the active card (desktop only — arrows are hidden on mobile, where it's touch-swipe).
- `demo.spec.ts` — "Live ansehen" opens the player modal with the locale-aware `motion.html` iframe; Escape and backdrop-click close it.
- `cookie.spec.ts` — the consent banner shows on first visit; **Accept persists `luumos_consent=granted`**, **Decline persists `denied`** (analytics stay off); the banner links to `/{lang}/datenschutz`.
- `tests/pages/HomePage.ts` — page object. `tests/helpers.ts` — `suppressCookieBanner()` + `BOOKING_URL`. Stable hooks: `data-testid="demo-open" | "demo-modal" | "ref-card" | "ref-next" | "faq-q"`.

**To add a flow:** `tests/<flow>.spec.ts`. Reuse/extend `tests/pages/` + `tests/helpers.ts`. Add a `data-testid` to the component if a robust selector doesn't already exist. Locale-dependent assertions: prefer testids/roles over visible text, or pin the locale via the `/de` ↔ `/en` route.

**Next flows to author:** cookie "manage/withdraw" link once built; a visual check that the `motion.html` player fills the modal (no letterbox); legal-page content sanity once the drafts are finalised.

### Run history — three trails

The HTML report (`playwright-report/`) is **overwritten every run** — it's the *last* run, not a history. History lives in three places:

1. **Local archive** (`test-archive/`, gitignored) — `npm run test:archive` runs the suite, then copies that run's report into `test-archive/<date>__<branch>__<commit>/report/` (never overwritten) with a `summary.md`, and appends a row to `test-archive/INDEX.md` (the logbook: when · pass/fail/skip · commit). Open a past run with `npx playwright show-report test-archive/<folder>/report`. Pass args through, e.g. `npm run test:archive -- --project=chromium`.
2. **Pre-push hook** (`.githooks/pre-push`) — on every `git push`, launches `test:archive` **in the background** (non-blocking: the push isn't held up or blocked) so the suite runs and the report opens + archives after each push. Skips when `CI` is set or with `SKIP_E2E_HOOK=1 git push`. Enable on a fresh clone with `git config core.hooksPath .githooks`.
3. **CI artifacts** (GitHub Actions) — every push/PR to `main`/`staging` uploads the report tied to its commit (14-day retention). The shareable, per-commit history.

### Port registry — one preview port per project

Each project pins **two** distinct ports — one for the **preview server** (so two suites can run at once without one silently attaching to the other's server — the `webServer.reuseExistingServer` trap) and one for the **HTML report server**. Both pinned away from Playwright/vite's shared defaults (preview 4173, report 9323); the preview port uses `strictPort: true` so a clash fails loudly.

| Project | Preview port | Report port | Pinned in |
| --- | ---: | ---: | --- |
| AIRLUXO | 4180 | 9380 | (its own repo) |
| **luumos-agency** | **4181** | **9381** | preview: `vite.config.ts` + `playwright.config.ts` · report: `package.json` `test:report` + `scripts/test-archive.mjs` |

The report **files** never collide regardless of port — `playwright-report/`, `test-results/`, `test-archive/` all live inside this repo (scripts use `process.cwd()`). The report **port** only matters for the live `show-report` server.

### Driving a live browser (Playwright MCP)

`.mcp.json` registers the Playwright MCP so Claude Code can open a real browser to author/repair specs. After it's added, **restart Claude Code** (or `/mcp` → reconnect) and approve the `playwright` server. The CLI runs the tests; the MCP lets the agent write them — keep both.

---

## Manual testing checklist

A quick one-pass smoke by hand (the automated suite covers the assertions; this is
the "does it *feel* right" pass, especially the animated bits the suite can't judge).
Test on **`https://staging.luumos.ch`** (enter the basic-auth credentials).

### Desktop
- [ ] **Hero "Live ansehen"** → modal opens, the explainer plays **edge-to-edge (no letterbox)**, the scene-1 typewriter types *Minuten → Stunden*, Escape/✕/backdrop close it.
- [ ] **Header nav** — Über uns → "was wir tun", Vorgehen → #how, Referenzen → the carousel section (smooth scroll, clears the sticky nav).
- [ ] **Referenzen carousel** — prev/next + dots move through all 5 industries; the centred card is highlighted, neighbours fade; **card drop-shadows aren't clipped**.
- [ ] **FAQ** — accordion opens/closes smoothly; one open at a time.
- [ ] **Booking CTAs** (nav, hero, CTA band, footer "Beratung buchen") open the Google booking page in a new tab. Footer LinkedIn → the real profile.
- [ ] **Footer** — KontaKt icons filled + centred; legal + FAQ links resolve; **language switch DE ↔ EN** flips the whole page.
- [ ] **Hover/press** — buttons lift on hover and scale on press.

### Mobile (real phone or device emulation)
- [ ] **Flow diagram** — tiles align with the wires; the "+" badge is round; no oval shapes.
- [ ] **Trust bar** marquee scrolls right→left.
- [ ] **Nav** CTA sits at the right edge, sized down.
- [ ] **Referenzen** — swipe through cards (arrows hidden on mobile); dots track position.
- [ ] **"Live ansehen"** modal fills cleanly; tap inputs/controls don't zoom the page.

### Cookie consent
- [ ] First visit (or cleared `localStorage`) shows the banner. **Akzeptieren** / **Ablehnen** both dismiss it and persist the choice; reload → it stays dismissed. The **Datenschutz** link works.
- [ ] After **Ablehnen**, no analytics load (PostHog isn't wired yet — so this is currently always true; re-check once PostHog is added).

### SEO / social (once `SITE_PASSWORD` is removed at launch, or via the un-gated asset URLs)
- [ ] `https://luumos.ch/og-image.png`, `/robots.txt`, `/sitemap.xml` load **without** the basic-auth prompt (they're excluded from the gate).
- [ ] A link preview (paste the URL into LinkedIn/WhatsApp/Slack) shows the OG image + German title.
