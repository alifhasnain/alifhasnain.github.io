---
name: Dev Portfolio
description: A senior mobile developer's portfolio rendered as their own working environment — phosphor green on near-black, every container an IDE window.
colors:
  phosphor: "#3df08a"
  phosphor-link: "#2bd478"
  phosphor-dim: "#17a05c"
  phosphor-deep: "#0b4c2d"
  signal-teal: "#35d3c4"
  caution-amber: "#e3b341"
  ground: "#080d0b"
  void: "#050807"
  panel: "#0c1311"
  panel-raised: "#101a17"
  panel-inset: "#14201c"
  hairline: "#1b2a25"
  hairline-live: "#27443a"
  text: "#dfeae4"
  text-muted: "#93aaa0"
  text-faint: "#64796f"
  syntax-keyword: "#b78cf5"
  syntax-function: "#6fd3f0"
  syntax-type: "#f2d086"
  syntax-string: "#e2bd6f"
  syntax-number: "#ef8f7f"
  syntax-comment: "#55685f"
  mark-kotlin: "#a985f5"
  mark-compose: "#4ec9a8"
  mark-room: "#7fd06a"
  mark-retrofit: "#e8a25c"
  mark-flutter: "#46b8f0"
  mark-riverpod: "#7fb4f5"
  selection-fg: "#eafff2"
  dot-modified: "#3a4436"
  dot-close: "#47342f"
  scanline: "rgb(0 0 0 / .16)"
typography:
  display:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "clamp(1.95rem, 4.15vw, 3.95rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 82%"
  headline:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  headline-sm:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.87rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  metric:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "clamp(0.86rem, 1.05vw, 0.97rem)"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "clamp(0.82rem, 1.05vw, 0.95rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "-0.005em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  ui:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.01em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.07em"
  micro:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.58rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.06em"
rounded:
  cell: "1px"
  hairline: "2px"
  pane: "5px"
  control: "3px"
  chip: "2px"
spacing:
  hair: "5px"
  tight: "7px"
  snug: "10px"
  base: "14px"
  pane: "18px"
  section: "22px"
  band: "44px"
components:
  button-primary:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.phosphor}"
    rounded: "{rounded.hairline}"
    padding: "7px 13px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.phosphor-deep}"
    textColor: "{colors.phosphor}"
  button-ghost:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.hairline}"
    padding: "7px 13px"
  button-ghost-hover:
    backgroundColor: "{colors.phosphor-deep}"
    textColor: "{colors.text}"
  pane:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.pane}"
  pane-titlebar:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.text-muted}"
    padding: "7px 10px"
    typography: "{typography.label}"
  pane-statusbar:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.text-muted}"
    padding: "5px 11px"
    typography: "{typography.label}"
  chip-caution:
    backgroundColor: "transparent"
    textColor: "{colors.caution-amber}"
    rounded: "{rounded.chip}"
    padding: "2px 7px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.control}"
    height: "31px"
    width: "31px"
---

# Design System: Dev Portfolio

## Overview

**Creative North Star: "The Workspace, Not the Résumé"**

This system does not describe a developer's environment; it *is* one. Every container
on the page is a window from a working machine — a title strip with a filename, a
gutter of line numbers, a status bar reading `NORMAL Kotlin utf-8 19:1`. Sections open
with a `//` comment marker rather than a heading rule. The page footer is a live shell
prompt with a blinking caret and a running clock. The visitor is not reading a pitch
about competence; they are looking over a shoulder at the machine where the work
happens.

The register is engineer-to-engineer: dark, dense, technically literal, dry. Phosphor
green on near-black is the whole emotional range, and that narrowness is the point —
where a marketing site would reach for a second brand colour, this system reaches for
a hairline, a status bar, or a line number. Colour that is not green is reserved almost
entirely for **syntax**, where violet, cyan, and amber mean *keyword*, *type*, and
*string* rather than *brand*. Green is interface; the polychrome belongs to code.

Density is deliberately high and deliberately uneven. A wide editor sits beside a
narrow layer diagram; a twenty-line code sample sits beside a four-row terminal log.
Nothing is a card of equal size, because an IDE is never a grid of equal panels.
Confirmed anti-reference: the conventional candidate site — centred hero, three
identical feature cards, soft gradient, pastel accent, a portrait floating on white.

**Key Characteristics:**
- Every container is window chrome: title strip, body, status bar.
- Two monospace voices — one wide and structural, one built for code.
- Green is the interface; syntax colour is the only polychrome.
- Hairlines (1px) do the work that shadows and fills do elsewhere.
- Unequal spans over equal cards; an editor is wider than a diagram.
- Placeholder content uses `[BRACKET_CASE]`, which reads as template syntax and is
  therefore native to the world instead of looking broken.

## Colors

A single phosphor green against layered near-blacks, with a separate syntax palette
that appears only inside code.

### Primary
- **Phosphor Green** (`#3df08a`): the interface voice. Display headline, active states,
  prompt sigils, LEDs, meter fill, the `>_` caret on every control, and the primary
  button's border and text. It carries a soft bloom (`text-shadow: 0 0 26px`) on
  display type only — the one place the CRT metaphor is rendered rather than implied.
- **Link Green** (`#2bd478`): inline links inside body copy, underlined at 34% opacity
  so a link is legible as a link without competing with the headline.
- **Dim Green** (`#17a05c`): the `//` in section markers, diagram box strokes, timeline
  rules, key labels in readouts. This is green at working weight — the shade that lets
  the bright green stay rare.
- **Deep Green** (`#0b4c2d`): meter troughs, selection background, the tint under a
  hovered control.

### Secondary
- **Signal Teal** (`#35d3c4`): annotations (`@Composable`, `@override`) and diagram edge
  labels (`Events`, `Response`). A second technical voice, never a brand accent.
- **Caution Amber** (`#e3b341`): the honesty colour. The `draft` chip, the `sample data`
  chip, and every placeholder that stands where a factual claim will go. Amber means
  *this is not verified yet* and is used for nothing else.

### Tertiary — Technology Marks
The one place a hue is allowed to mean *a named thing in the world* rather than a system
role. Each technology icon carries a desaturated tint drawn from that technology's own
identity, held down in saturation so a grid of twelve marks still reads as one field
rather than a logo wall. Used **only** on `.stack__ico` and pane-title icons, never on
text, borders, or fills.
- **Kotlin Violet** (`#a985f5`) · **Compose Green** (`#4ec9a8`) · **Room Green** (`#7fd06a`)
  · **Retrofit Amber** (`#e8a25c`) · **Flutter Blue** (`#46b8f0`) · **Riverpod Blue**
  (`#7fb4f5`). Hilt reuses Syntax Function Cyan (`#6fd3f0`) and Dart reuses Signal Teal
  (`#35d3c4`); Coroutines, Flow, Git, and CI/CD carry no tint and inherit Text Muted.

### Neutral
- **Ground** (`#080d0b`): the page. Carries two very low-opacity radial washes (green at
  10%, teal at 5.5%) so the black has depth without becoming a gradient.
- **Void** (`#050807`): behind imagery only, so a photo or portrait sits deeper than the page.
- **Panel** (`#0c1311`): every pane body.
- **Panel Raised** (`#101a17`): title strips and status bars — the chrome reads lighter
  than the content it frames, as it does in a real editor.
- **Panel Inset** (`#14201c`): window dots and small recesses.
- **Hairline** (`#1b2a25`): every border and divider at rest.
- **Hairline Live** (`#27443a`): the same line on hover or focus-within, and on controls
  at rest. Depth is a line changing value, not a shadow appearing.
- **Text** (`#dfeae4`): body and content.
- **Text Muted** (`#93aaa0`): secondary prose, status bars, filenames (7.3:1 on ground).
- **Text Faint** (`#64796f`): line-number gutters and decorative readouts only. At 3.5:1
  it is below AA for body text and must never carry meaning.
- **Selection Foreground** (`#eafff2`) on Deep Green: the only near-white in the system,
  used so selected text stays legible against the green selection ground.
- **Window dot tints** (`#3a4436` modified, `#47342f` close): the two right-hand pane dots
  warm faintly on pane hover, echoing an editor's dirty-buffer and close affordances. Held
  far below the phosphor's chroma precisely so they read as chrome, not as controls.
- **Scanline black** (`rgb(0 0 0 / .16)` at a 1px/3px repeat, `mix-blend-mode: multiply`):
  the CRT raster over imagery. A material, not a colour role.

### Named Rules
**The Four-Channel Colour Rule.** Every hue on the page belongs to exactly one of four
channels: **green** for interface, state, and structure; **syntax** (violet, cyan, gold,
amber, coral) inside code only; **amber** for unverified content; and **technology marks**
on icons only. A hue that serves none of these four is decoration and breaks the system.

**The Amber-Means-Unverified Rule.** Amber is reserved for honesty markers. If a number,
employer, or metric is not yet real, it is amber or bracketed. Never style real content amber.

**The Faint-Text Rule.** `#64796f` is for line numbers and ornament. If a reader needs to
read it, it is at least `#93aaa0`.

## Typography

**Display Font:** Martian Mono (self-hosted variable woff2, weight 100–800, width 75–112.5%)
**Body / Code Font:** JetBrains Mono (self-hosted variable woff2, weight 100–800)

**Character:** Two monospaces doing genuinely different jobs. Martian Mono is wide,
geometric, and mechanical — it gives headlines the look of a boot banner, and its width
axis is what lets a large headline stay large without overrunning its column. JetBrains
Mono is the face an IDE actually ships with: built for code, legible at 10–11px, and
correct for this world in a way a proportional UI sans would not be. Nothing here is
monospace as costume — the display face is set at a display size and the body face is
carrying real code.

### Hierarchy
- **Display** (700, `clamp(1.95rem, 4.15vw, 3.95rem)`, 1.0, `-0.035em`, width 82%): the
  page headline only. Condensed via the width axis rather than shrunk, so it holds scale
  beside the readout panel. Green, with the single glow in the system.
- **Headline** (700, `0.95rem`, 1.35, `-0.025em`): markdown-pane `##` headings. Green, no glow.
- **Headline Small** (700, `0.87rem`): note titles, where three sit in a row and the full
  headline step would crowd them.
- **Metric** (700, `1.25rem`, 1.1, `-0.035em`): the readout numbers in the GitHub panel.
  The only large type outside the headline.
- **Title** (700, `clamp(0.82rem, 1.05vw, 0.95rem)`, `0.1em`, uppercase): the `// SECTION`
  markers. Letter-spaced wide because a comment marker is a label, not a voice.
- **Lede** (400, `clamp(0.86rem, 1.05vw, 0.97rem)`, 1.72, max 58ch): the hero subtitle only
  — the one passage set above body size, because it carries the claim the headline compresses.
- **Body** (400, `0.8rem`, 1.75, max ~62ch): prose inside panes. The measure is held tight
  deliberately — monospace runs wider per character, so 62ch here reads like 70ch of a
  proportional face.
- **UI** (400, `0.74rem`, `0.01em`): every interactive label — buttons, nav items, note
  actions, the skip link. One step for all control text; a second value 0.01rem away is drift.
- **Code** (400, `0.68rem`, 1.6): code samples, terminal logs, dependency blocks. Small
  panes drop to `0.675rem`, the floor.
- **Label** (400, `0.62rem`, `0.07em`, often uppercase): status bars, key names, chips.
- **Micro** (400, `0.58rem`, `0.06em`): activity-rail captions and the contribution-grid
  month scale. Ornament and wayfinding only — never a sentence.

### Diagram type scale
Text inside diagram SVGs is sized in **viewBox units, not CSS pixels**, and is therefore a
separate scale: `9px` box labels, `8px` box sublabels, `7.5px` edge labels. Because each
SVG scales to its pane, these render at roughly 9–11 effective pixels. Do not translate
these into the CSS ramp; they are internal to the drawing.

### Named Rules
**The Width-Before-Size Rule.** When the display headline does not fit, reduce
`font-stretch` toward 75% before reducing `font-size`. Scale is the design; width is the
adjustment.

**The Two-Voices Rule.** Martian Mono never sets body copy or code; JetBrains Mono never
sets the display headline. A third family is a system violation.

**The Legible-Floor Rule.** Monospace body copy never goes below `0.8rem` and code never
below `0.675rem`. When a code sample will not fit, it scrolls horizontally inside its pane
— the aesthetic does not get to cost legibility.

**The One-Step-Per-Job Rule.** Each job takes exactly one step. All control text is UI
(`0.74rem`); all code is Code (`0.68rem`). A new size within `0.03rem` of an existing step
is not a decision, it is drift — reuse the step.

## Layout

A fixed application shell around a scrolling document. A 52px top bar spans the full
width; an 82px activity rail is pinned down the left edge; a 38px status bar is pinned to
the bottom. Content sits between them at a 22px inset, capped at 1600px.

Bands stack vertically, each opening with a `// MARKER` head on a 1px bottom rule and
separated by `clamp(26px, 3.4vw, 44px)`. Space above a heading always exceeds space below
it. The pane gap is a constant 14px everywhere — mosaic, grids, and columns all share it.

**The project mosaic** is the layout's signature: a ten-column grid in two rows of
independent height. Row one runs a 4-column Kotlin editor, a 4-column Dart editor, and a
2-column portrait diagram; row two runs a 4-column landscape diagram and two 3-column
utility panes. Spans are unequal by design and are assigned by what the content needs —
an editor gets width because code has a measure, a portrait diagram gets narrowness
because its aspect is tall.

**The triptych** (skills / experience / github) is three equal columns divided by 1px
vertical rules with no gap and no card — the rule is the divider.

**Responsive** steps down by removing structure rather than reflowing it:
- **≤1400px** — the mosaic drops to three rows of two so editors keep their measure.
- **≤1180px** — the activity rail is removed and the section nav moves to a second,
  horizontally scrollable row of the top bar (bar grows to 88px). The hero becomes
  portrait + headline over a full-width readout strip. The triptych goes two-up.
- **≤1080px** — the mosaic goes two-up.
- **≤780px** — the mosaic goes single column; the contact pane stacks.
- **≤720px** — the headline moves to the top of the hero and the portrait becomes a
  3:2 band (capped at 420px) beneath the primary actions, cropped to `50% 6%` so the
  whole head survives at every width; the status bar becomes static at the document
  end; the tech grid drops to three columns.

### Named Rules
**The Measure-Over-Columns Rule.** Code panes lose grid columns before they lose measure.
A layout that fits more panes by clipping identifiers has failed.

**The Thesis-First Rule.** On any viewport where the portrait would push the headline out
of the first screen, the headline moves above it. The first viewport carries the claim.

## Elevation & Depth

Depth is carried by **1px hairlines and tonal layering**, not by shadows. Panels step up
through three near-black values (`#0c1311` → `#101a17` → `#14201c`) and are separated by
hairlines that change value rather than by edges that cast light.

Shadows exist only to lift a pane off the page, and they always carry both an offset and
a blur — never a zero-offset halo.

### Shadow Vocabulary
- **Pane at rest** (`box-shadow: 0 1px 0 rgb(255 255 255 / .022), 0 12px 28px -14px rgb(0 0 0 / .92)`):
  a 1px top light line plus a deep soft drop. Every pane carries this.
- **Pane engaged** (`box-shadow: 0 1px 0 rgb(255 255 255 / .03), 0 18px 40px -16px rgb(0 0 0 / .96)`):
  on `:hover` and `:focus-within`, paired with the border moving to Hairline Live.
- **Phosphor bloom** (`text-shadow: 0 0 26px rgb(61 240 138 / .28)`, and `0 0 8px` on LEDs):
  not depth. This is the CRT material — permitted on green display type, LEDs, meter fill,
  and the contribution grid's brightest cells, nowhere else.

### Named Rules
**The Hairline-First Rule.** Reach for a 1px border or a tonal step before reaching for a
shadow. If a new element needs a shadow to read, the layering is wrong.

**The Bloom-Is-Material Rule.** Glow is the phosphor, not a highlight. It appears on green
light sources only. A glow on a panel, a card, or a button fill is decoration and is out.

## Shapes

Nearly rectangular, with the smallest radius that still reads as software. Panes take 5px;
every control-scale element — icon buttons, the activity-rail box, tech tiles, scrollbar
thumbs — takes 3px; chips and meters take 2px or 0; the contribution grid's 7px cells take
1px. Nothing on the page is a pill, and nothing is a circle except an LED, a window dot,
and the contribution ring.

Borders are always exactly 1px. The system uses left-hairlines (1px, never more) to mark
quoted or set-aside prose — the mission block, the platform-choice picks, the markdown
blockquote.

The recurring silhouette is the **window**: a rectangle with a chrome strip above the
content and, usually, a status strip below it. Diagram boxes repeat the same 3px-radius
rectangle at small scale, so an architecture diagram is visibly made of the same material
as the page.

### Named Rules
**The One-Pixel Rule.** Every border in the system is 1px. A 2px or 3px border, and any
coloured side stripe above 1px, is out.

**The One-Control-Radius Rule.** Anything control-sized is 3px. A 4px sibling next to a 3px
one is drift, not a variant.

**The Window Rule.** Any new content container inherits pane chrome — title strip with a
name, body, status strip where there is something true to report. A bare rounded rectangle
is not part of this system.

## Components

### Buttons
Terminal commands rendered as controls. Every label is a callable — `view_projects()`,
`get_in_touch()`, `copy_email()` — prefixed with a dim `>_` sigil that brightens on hover.
- **Shape:** near-square (2px radius), 1px border.
- **Primary:** Dim Green border, Phosphor text, `rgb(16 26 23 / .72)` ground, `7px 13px`
  (large variant `11px 20px`, `0.82rem`).
- **Ghost:** Hairline Live border, Text colour, same padding.
- **Hover:** border → Phosphor, ground → `rgb(23 160 92 / .12–.18)`, `translateY(-1px)`,
  sigil → full Phosphor. 180ms.
- **Focus:** 2px Phosphor outline at 2px offset, everywhere in the system.
- **Confirmed state:** `.is-done` holds a Phosphor border while a control reports back
  (used by `copy_email()`).

### Chips
- **Style:** 1px border at ~32% of the chip's own hue, transparent ground, `0.6–0.62rem`,
  `0.12em` tracking, uppercase, 2px radius.
- **Variants:** `draft` (amber, with a glowing 5px dot) and `sample data` (amber, no dot).
  Both are honesty markers, not decoration.

### Panes / Containers
- **Corner Style:** 5px.
- **Background:** Panel body, Panel Raised chrome.
- **Shadow Strategy:** pane-at-rest, stepping to pane-engaged on hover or focus-within.
- **Border:** 1px Hairline → Hairline Live when engaged.
- **Internal Padding:** 12–18px depending on content type; code panes pad 12px and let the
  gutter carry the left edge.
- **Title strip:** filename with a 14px icon, plus three 7px window dots pushed right. The
  dots are **decorative marks, not controls** — no button semantics, no pointer cursor, and
  they tint faintly on pane hover to signal the pane, not a click target.
- **Status strip:** uppercase label cells left, a `line:column` or state readout right.

### Editor Pane (signature component)
The system's defining container. A flex row of two `<pre>` blocks: a right-aligned,
`user-select: none`, aria-hidden line-number gutter on a darker ground with a 1px right
rule, and the source block beside it in `white-space: pre`. The wrapper is
`overflow: auto`, `tabindex="0"`, and carries `role="group"` with a descriptive label so
code is keyboard-scrollable. Syntax spans are semantic classes (`.k .f .t .s .n .an .p .a .c`)
mapped to the syntax palette. Gutter length and the status strip's `line:column` must stay
in step with the sample.

### Diagram Pane
An inline SVG at `width: 100%; height: 100%` inside an `overflow: hidden` block, so it
letterboxes to its pane and can never outgrow the window it sits in. Boxes are 3px
rectangles, Panel Raised at 90%, stroked Dim Green (leaf nodes Hairline Live); wires are
1px Hairline Live paths; edge labels are Signal Teal on a Panel chip.

### Readout Panel
Label/value rows (`<dl>`, dim green keys left, text values right) over block meters. A meter
is a track plus `repeating-linear-gradient(90deg, phosphor 0 5px, transparent 5px 8px)`
sized by an inline `--fill` count — discrete blocks, not a smooth bar, and each block stands
for a counted thing.

### Navigation
- **Top bar nav:** `[01] about` — a faint bracketed index plus a lowercase label,
  `0.76rem`, Text Muted, on a transparent 1px bottom border. Active/hover: label → Text,
  index → Phosphor, bottom border → Phosphor.
- **Activity rail:** icon in a 36×30 box above a `0.58rem` caption. Active: Phosphor text,
  Dim Green border, `rgb(23 160 92 / .14)` fill, and an inset `12px` green glow.
- **Mobile:** the rail is removed and the nav becomes a scrollable second row of the top
  bar. It is never replaced by a hamburger — the section list stays visible.

### Status Bar (signature component)
The page's own footer as a shell prompt: green `developer@portfolio`, cyan `:~$`, a typed
command, and a blinking 0.55em block caret. Right side carries a live tabular-numeric
clock, a 1px separator, and the copyright.

### Named Rules
**The Callable-Label Rule.** Interactive labels are written as function calls or file
paths, in the site's own language. A button reading "Learn more" does not belong here.

**The No-Fake-Controls Rule.** Window dots, brackets, and chrome are decorative and are
hidden from assistive technology. Anything that looks pressable must do something.

## Do's and Don'ts

### Do:
- **Do** wrap every new content region in pane chrome — a named title strip, a body, and a
  status strip when there is something true to report.
- **Do** carry depth with 1px hairlines and the three-step panel ramp; add a shadow only to
  lift a whole pane, always with offset *and* blur.
- **Do** condense the display face via `font-stretch` (toward 75%) before reducing its size.
- **Do** keep every hue in one of the four channels — green interface, code syntax, amber
  honesty, technology marks on icons.
- **Do** reuse an existing type step rather than adding one within `0.03rem` of it.
- **Do** mark anything unverified in amber or `[BRACKET_CASE]`, and keep the `draft` and
  `sample data` chips until the content behind them is real.
- **Do** draw new icons as SVG on the existing 24px grid at 1.4–1.6 stroke width.
- **Do** let code scroll horizontally inside its pane rather than shrinking below `0.66rem`
  or wrapping mid-expression.
- **Do** keep the boot sequence scoped to `html[data-boot="run"]` so the page renders
  finished without JavaScript, and keep every animation gated on `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a hue outside the four channels, and don't let a technology-mark tint
  escape onto text, borders, or fills.
- **Don't** use a border, divider, or side stripe thicker than 1px, or a 4px radius on a
  control that sits beside a 3px one.
- **Don't** put a glow on a panel, button fill, or card — bloom belongs to green light
  sources only.
- **Don't** lay out content as a row of equal-size cards; spans are unequal and assigned by
  what the content needs.
- **Don't** set body copy or code in Martian Mono, or the display headline in JetBrains
  Mono, and don't add a third family.
- **Don't** use `#64796f` for anything a reader must read.
- **Don't** ship a control that looks pressable and isn't, and don't give the decorative
  window dots interactive semantics.
- **Don't** load a font, script, or image from a third-party origin; this project is
  self-hosted end to end.
- **Don't** present a number as real while it is still a placeholder — delete the row
  instead.

**Print is a different medium.** The `@media print` block deliberately leaves this system:
white ground, black text, `#999` pane borders, chrome and ornament removed. Those three
values are correct for paper and are the only place in the project where the palette above
does not apply.
