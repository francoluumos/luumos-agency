<!-- SEED: re-run /impeccable document once there's more code to capture the full token/component set. Implemented in src/styles/index.css. -->
---
name: Luumos
description: Light, premium consulting site carried by the Luumos mid-blue→bright-blue gradient
colors:
  brand-deep: "#1E40AF"
  brand-blue: "#2563EB"
  brand-bright: "#38BDF8"
  ink: "#14161C"
  muted: "#565B67"
  neutral-bg: "#FAFBFC"
  surface: "#FFFFFF"
  hairline: "#E7EBF2"
---

# Design System: Luumos

## 1. Overview

**Creative North Star: "The Quiet Lab"**

Luumos is the calm, exceptionally precise expert in a room full of hype. The site reads like a high-end consultancy that happens to be deeply technical: airy, confident, and unhurried, with one vivid signal of energy — the Luumos spark gradient — used sparingly enough that it always lands. The light, generous canvas does the trustworthiness work (Stripe / Mintlify); the mid-blue→bright-blue gradient does the *this team is alive and modern* work, carried by the Luumos spark mark and rationed like a precious resource.

This system explicitly rejects the visual language of AI hype: no neon-on-black walls, no buzzword-soup heroes, no fake-3D, no "revolutionary" energy. It equally rejects soulless corporate-SaaS boilerplate (stock illustrations, say-nothing gradients-as-decoration) and the cheap dev-shop template look (gradient blobs, generic "we build apps"). Premium restraint is the whole argument: a flawlessly built, quiet site is itself proof that Luumos builds flawless, considered things.

**Key Characteristics:**
- Light, airy canvas; ink text; abundant whitespace.
- A single accent: the mid-blue→bright-blue brand gradient, used on ≤10% of any screen.
- Refined single-sans typography, multiple weights, tight but breathable.
- Motion that confirms quality without performing — responsive, never showy.
- Every screen engineered toward one action: book a consult.

## 2. Colors

A near-monochrome light system disciplined by one luminous brand gradient. The neutrals carry the structure; the gradient carries the meaning.

### Primary
- **Luumos Blue** (`#2563EB`): The core brand hue — the heart of the spark. Anchors the primary gradient, primary buttons, active states, key links.
- **Luumos Bright** (`#38BDF8`): The luminous end of the spark. Pairs with the deeper blues to form **the signature gradient** (`linear-gradient(deep → blue → bright)`) on the primary CTA, the logo mark, and rare hero accents.

### Secondary
- **Luumos Deep** (`#1E40AF`): The mid-dark anchor of the gradient — its starting stop, and the color for deeper-pressed/active accent states.

### Neutral
- **Ink** (`#14161C`): Primary text and high-emphasis headings. A near-black with the faintest cool/blue cast so it relates to the brand, never a flat #000.
- **Muted** (`#565B67`): Secondary text, captions, supporting copy. Must still clear 4.5:1 on the light bg — do not let it drift lighter "for elegance."
- **Neutral BG** (`#FAFBFC`): Page canvas. An off-white with a whisper of cool tint, never cream/sand.
- **Surface** (`#FFFFFF`): Raised cards / panels above the canvas.
- **Hairline** (`#E7EBF2`): Borders, dividers, input strokes. 1px, low-contrast.

### Named Rules
**The Rationed Spark Rule.** The brand gradient appears on at most ~10% of any screen — the primary CTA, the mark, and at most one hero flourish. Its rarity is the entire point; the moment it decorates everything, Luumos looks like every other AI startup. Everywhere else, the brand is carried by ink-on-light typography and space, not color.

**The No-Black Rule.** Pure `#000` and pure `#FFF` text/bg pairings are forbidden. Use Ink and Neutral BG so the whole system stays subtly, coherently cool/blue-tinted.

## 3. Typography

**Display Font:** Single refined sans `[family to be chosen at implementation — humanist or geometric grotesque, e.g. a high-quality Inter/Geist/Söhne-class face]`
**Body Font:** Same family, lighter/regular weights.
**Label/Mono Font:** `[optional mono for technical labels — to be decided at build]`

**Character:** One family doing all the work across weights — disciplined, modern, unfussy. The contrast comes from weight and size, not from mixing families (no two-similar-sans pairing).

### Hierarchy
- **Display** (semibold/600, `clamp(2.5rem, 6vw, ~5.5rem)`, line-height ~1.0, letter-spacing ≥ -0.03em): Hero headline only. `text-wrap: balance`.
- **Headline** (semibold/600, ~2rem, line-height ~1.1): Section openers.
- **Title** (medium/500, ~1.25rem): Card and subsection titles.
- **Body** (regular/400, ~1.0–1.125rem, line-height ~1.6): Prose. Cap measure at 65–75ch; `text-wrap: pretty`.
- **Label** (medium/500, ~0.8rem, letter-spacing ~0.04em, often uppercase): Eyebrows, tags, nav, button text.

### Named Rules
**The One Family Rule.** Hierarchy is built from weight and scale within a single sans. No serif/sans mash-up, no second sans that's "almost the same." Distinctiveness comes from spacing and confidence, not font collecting.

## 4. Elevation

Flat by default. Depth is conveyed through tonal layering (Surface white lifting off the off-white canvas) and 1px hairlines, not heavy shadows. Shadows are reserved as a *response to state* — a soft, diffuse lift on hover for interactive cards, and a faint violet-tinted glow under the primary gradient CTA. No drop shadows at rest; nothing 2014-app-heavy.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat until you interact with them. If a card has a shadow before you hover it, the shadow is wrong. The only ambient glow allowed is a faint brand-tinted halo beneath the primary CTA.

## 5. Components

<!-- No components exist yet (pre-implementation). The next /impeccable document scan will extract real button/card/input/nav primitives and write the .impeccable/design.json sidecar. Until then, build to the rules above: gradient primary CTA with soft violet glow, flat hairline-bordered cards that lift on hover, light inputs with a violet focus ring. -->

## 6. Do's and Don'ts

### Do:
- **Do** keep the canvas light and airy (`#FAFAFB`), with ink text and generous whitespace — credibility is carried by space and restraint.
- **Do** reserve the violet→magenta gradient for the primary CTA, the mark, and at most one hero flourish (the Rationed Spark Rule).
- **Do** build hierarchy from one refined sans in multiple weights.
- **Do** keep surfaces flat at rest; let shadow/glow appear only on interaction.
- **Do** clear WCAG AA: body ≥4.5:1, large text ≥3:1, visible focus states, and a `prefers-reduced-motion` alternative for every animation.
- **Do** make every section funnel toward booking a consult.

### Don't:
- **Don't** do **crypto/AI hype** — no neon-on-black walls, no buzzword-soup heroes, no fake-3D, no "revolutionary" energy.
- **Don't** ship **corporate SaaS boilerplate** — no stock illustrations, no say-nothing decorative gradients, no soulless enterprise template.
- **Don't** look like a **cheap dev-shop / agency** — no gradient blobs, no generic "we build apps."
- **Don't** look like a **generic Odoo-partner site** — no templated feature-soup or ERP-vendor blandness.
- **Don't** let the gradient decorate everything; over-use kills it.
- **Don't** use pure `#000`/`#FFF` or let muted text drift below 4.5:1 "for elegance."
