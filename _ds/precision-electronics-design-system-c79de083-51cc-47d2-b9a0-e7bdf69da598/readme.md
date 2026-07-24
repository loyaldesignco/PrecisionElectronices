# Precision Electronics — Design System

A brand & UI design system for **Precision Electronics, Inc.**, a manufacturer of
custom magnetic components — transformers, inductors, chokes and toroidal coils —
serving aerospace, defense, and industrial customers.

> **Tagline:** *The Leading Source for Prototypes Thru Production.*

Precision Electronics builds mission-critical magnetics in every construction:
Dry · Open · Varnished · Epoxy/RTV Filled Molded · Oil/Silicone Filled ·
Hermetically Sealed · Low Profile · Toroidal. The company is **ISO 9001 (QAS
International) registered** and located at 1 Di Tomas Court, Copiague, New York.

The brand voice is confident, precise, and engineering-led — the visual system
follows suit: a light, technical canvas, navy ink, and a single high-visibility
"signal yellow" accent borrowed from cockpit / instrumentation cues.

---

## Sources this system was built from

- **Figma variable exports** (`uploads/variables (7–11).json`) — the authoritative
  token set (color, typography, spacing, radius, layout, interactions). All CSS
  tokens here are transcribed from these files.
- **Brand logos** — `uploads/Precision.svg` (white wordmark) and
  `uploads/PE-Dark.svg` (yellow "P" mark + navy wordmark). Copied to `assets/`.
- **Imagery** — `uploads/6a2988f16f010b3aeb571205_bg.jpg` (fighter-jet hero,
  end-market cue) and the `…QAS LOGO Template.jpg` ISO 9001 certification badge.
- **Live sites** (for context; may require access):
  - Legacy: http://www.precisionelect.com/
  - Staging (Webflow): https://precision-electronics-be9866.webflow.io/

> Note: the staging Webflow site could not be fetched directly during authoring.
> The token JSON exports ARE that site's design variables, so the foundations are
> accurate. UI-kit **layouts** are a faithful reconstruction from the tokens,
> logos, imagery and product copy — verify page-level composition against the live
> site and tell me what to adjust.

---

## CONTENT FUNDAMENTALS

**Voice.** Authoritative, plain-spoken, engineering-first. Precision Electronics
sells reliability, not hype. Copy reads like it was written by people who make the
part, for people who spec the part.

- **Person.** Third-person / imperative for the company ("Precision Electronics
  builds…", "Request a quote"). Address the customer as **you** in CTAs and
  support copy ("Send us your drawing"). Avoid "we" as a personality — the brand
  is the work, not the team.
- **Casing.** Sentence case for body and most headings. **Title Case** for nav
  items and product/category names (e.g. "Toroidal Coils", "Hermetically Sealed").
  ALL-CAPS is reserved for eyebrows/overlines and the wordmark.
- **Tone words:** precise, proven, mil-spec, custom, prototype-to-production,
  tolerance, tested, registered.
- **Numbers & specs matter.** Real figures earn their place — tolerances,
  temperature ranges, certification numbers (e.g. "ISO 9001 · Cert. US3620"),
  years in operation. Never invent specs; leave a blank/placeholder if unknown.
- **No emoji.** Ever. This is a defense-electronics supplier. Iconography is
  line-based and literal (see below).
- **Sentence rhythm.** Short, declarative. Lead with the capability, follow with
  the proof. "Hermetically sealed transformers for avionics. Tested to MIL-STD."

**Example copy**
- Hero: *"Custom magnetics, built to spec. From first prototype to full
  production."*
- Eyebrow: *"ISO 9001 REGISTERED"*
- Card title: *"Toroidal Coils"* / body: *"Low-loss, low-EMI designs wound to
  your electrical and mechanical requirements."*
- CTA: *"Request a Quote"* · secondary *"Download Capabilities"*

---

## VISUAL FOUNDATIONS

**Palette.** A light, cool, technical base with one loud accent.
- **Signal Yellow `#ffc600`** — the single accent. Buttons, the logo mark, key
  highlights, focus rings. Used sparingly and always deliberately (hover
  `#cc9e00`). Text on yellow is **navy `#1b3153`**, never white — matches the
  logo and holds contrast.
- **Navy `#1b3153`** — primary ink. **Deep Navy `#1f4266`** — inverse surfaces
  and full-bleed panels.
- **Neutrals** — page `#f2f2f2`, panel `#eff5f6`, cards on `#ffffff`. Tints of
  navy (10/20/60%) do all the quiet work: borders, secondary text, secondary
  buttons.
- **Vibe of imagery:** cool-toned, blue-hour, aspirational hardware and
  end-market shots (aircraft, avionics). Photographs are treated straight — no
  duotone, minimal grain. When placed over photos, use the navy overlay
  (`--surface-overlay`) so white/yellow text stays legible.

**Typography.**
- **Instrument Sans** for headings and buttons — geometric, modern, engineered.
  Display weight 600, minor headings 500, slight negative tracking (`-0.01em`).
- **Open Sans** for body — highly legible at spec-sheet density, 400/600,
  line-height 1.6.
- Big type scale (H1 ≈ 4.2rem desktop) for confident heroes; H6 is an uppercase
  micro-label with wide tracking.

**Shape language — precise & square.** This is the brand's signature: **cards,
inputs, tags and blockquotes have NO radius (0px)** — crisp rectangles like a
datasheet or a machined panel. Only **buttons** round (`0.75rem`) and pills go
fully round. Don't soften cards; the tension between square panels and rounded
buttons is intentional.

**Borders over shadows.** The system is largely flat and **bordered**. Hairline
navy tints (`--border-primary` 10%, `--border-secondary` 20%) define cards and
inputs. Shadows exist (`--shadow-sm/md/lg`) but are reserved for genuine
elevation (menus, hover-lift on interactive cards) — never as decoration.

**Spacing & layout.** Rem scale 0.25→8. Container 1280px (sm 1000 / lg 1440),
generous section rhythm (`--section-pad-y` 8rem). Nav is 4rem tall.

**Backgrounds.** Mostly solid light neutral. Full-bleed **photo heroes** with a
navy overlay for contrast; **deep-navy panels** for stat/quality sections. No
gradients, no repeating patterns, no textures. Occasionally a thin yellow rule or
underline as an accent.

**Interaction & motion.** Restrained and functional.
- **Hover:** buttons darken (`#ffc600 → #cc9e00`); secondary/ghost surfaces
  deepen their navy tint; links fade toward 60% navy. Cards may lift with
  `--shadow-md` and reveal a yellow top-rule.
- **Press:** slight settle (no bouncy scale). Keep it mechanical.
- **Focus:** 2px **yellow** focus ring (`--focus-ring`) with offset — visible and
  on-brand.
- **Timing:** 120–320ms, standard ease `cubic-bezier(0.4,0,0.2,1)`. Fades and
  short translations only — no springs, no infinite loops on content.

**Transparency & blur.** Sparse. Navy-tint overlays on imagery; the sticky nav
may use a light translucent background with slight blur when scrolled. Otherwise
surfaces are opaque.

---

## ICONOGRAPHY

Precision Electronics has **no proprietary icon font**. The system uses
**[Lucide](https://lucide.dev)** (open-source, MIT) as the line-icon set —
1.5–2px stroke, square-ish geometry that matches the engineered, datasheet feel.
Load from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Guidance:
- **Line, not filled.** Stroke weight 1.5–2px, `currentColor` so icons inherit
  navy ink (or yellow when used as an accent bullet).
- **Literal & technical** — prefer `cpu`, `zap`, `shield-check`, `gauge`,
  `factory`, `ruler`, `file-check-2`, `radio`, `waves` over playful metaphors.
- **No emoji, no multicolor icons.** Unicode arrows (→) are acceptable inline in
  links/CTAs.
- **Real brand marks are assets, not icons:** the ISO 9001 / QAS badge
  (`assets/iso-9001-qas.jpg`) and the PE logo are placed as images — never redraw
  them.

> If Precision Electronics later provides a bespoke icon set, drop the SVGs into
> `assets/icons/` and document the swap here.

---

## Intentional additions

The source tokens define components implicitly (Button, Input, Card, Tag,
Blockquote, Eyebrow, form controls). Beyond those:
- **Status colors** (`--pe-success/-warning/-danger`) — added for form validation
  and quality/lifecycle states, which an industrial supplier UI needs but the
  export didn't specify. Tuned to sit beside the navy/yellow palette.
- **Lucide icon set** — substituted because no brand icon font was provided
  (flagged above).

---

## Index / Manifest

**Root**
- `styles.css` — entry point (@import manifest). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill wrapper for Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Instrument Sans + Open Sans (self-hosted variable fonts, `assets/fonts/`).
- `colors.css` — primitives + semantic color aliases.
- `typography.css` — type scale, weights, eyebrow/overline.
- `spacing.css` — spacing, radius, layout, elevation, motion.
- `base.css` — element defaults (body, headings, links).

**Components** (`components/`)
- `forms/` — **Button**, **Input**, **Checkbox**, **Radio**
- `content/` — **Card**, **Tag**, **Blockquote**, **Eyebrow**

Each component ships `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a
directory `@dsCard` HTML specimen.

**UI kit** (`ui_kits/website/`)
- Marketing website recreation: Home (jet hero), Capabilities, Quality, Contact.

**Foundations** (`guidelines/`)
- Specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/`)
- `logo-precision-electronics.svg` (dark), `logo-precision-electronics-white.svg`,
  `hero-jet.jpg`, `iso-9001-qas.jpg`.
