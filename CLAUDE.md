# Portfolio — working rules

Static personal portfolio for a Senior Mobile App Developer. Plain HTML/CSS/JS,
**no build step, no npm, no framework, no third-party runtime request.**

## Read before touching any UI

1. **`DESIGN.md`** — the visual system, recorded from the built page. Tokens are
   normative. It carries 16 named rules; the ones broken most often are:
   - **The Four-Channel Colour Rule** — every hue is green interface, code syntax,
     amber honesty, or a technology mark on an icon. Nothing else.
   - **The One-Step-Per-Job Rule** — all control text is `0.74rem`, all code is
     `0.68rem`. A new size within `0.03rem` of an existing step is drift.
   - **The One-Pixel Rule** — every border is 1px.
   - **The One-Control-Radius Rule** — control-sized elements are 3px.
   - **The Window Rule** — new content containers inherit pane chrome (title strip,
     body, status strip). A bare rounded rectangle is not part of this system.
2. **`.impeccable/design.json`** — the sidecar: shadows, motion, breakpoints, and
   drop-in component snippets the frontmatter schema can't hold.
3. **The direction contract** — the HTML comment at the top of `<body>` in
   `index.html`. It is the build's brief; keep the render honest to it.
4. **`PRODUCT.md`** — who this is for and what is factually true.
   `inspiration.png` is a **binding** visual reference the user pinned.
5. **`.impeccable/surfaces/index-html.md`** — surface strategy for the page.

For design work prefer `/impeccable <command>`; it loads all of the above plus the
craft floor. The design hook also runs the detector after UI edits — act on its
findings rather than re-auditing by hand.

## Content is draft — two hard rules

**Placeholder honesty.** Content is `[BRACKET_CASE]` tokens on purpose: bracket
tokens read as template variables inside a developer-environment world, so the
draft looks intentional rather than broken. Never replace a token with invented
plausible content. No fabricated employer, metric, testimonial, or date. If a
figure has no source, delete the line — this is a hiring page and a fake number is
a credibility failure. See `DATA-NEEDED.md` (what the owner must supply) and
`PLACEHOLDERS.md` (which token is where).

**Never publish real employer code.** The owner works at a PCI-DSS certified
payment gateway and this site is public. Code samples must stay generic and
authored: no internal class/module/endpoint/table names, no keys, tokens, merchant
IDs, or card data — including fake-looking ones — and no proprietary settlement or
fraud logic. Flag it if a sample the user supplies looks like production code.

## Invariants that break silently

- **Self-hosted only.** No CDN, no Google Fonts link, no analytics, no remote
  image. Fonts are woff2 in `assets/fonts/`.
- **No-JS must work.** `assets/js/site.js` is enhancement only. Boot animation
  keyframes are scoped to `html[data-boot="run"]`, which JS opts into — so the page
  renders finished without it. Never move content generation into JS.
- **Motion is gated** on `prefers-reduced-motion`, and there is one authored boot
  moment, not per-section entrances.
- **Code panes carry two hand-maintained things**: the `.code__gut` line-number
  list (one per line of the sample) and the `line:column` readout in
  `.pane__status`. Both look wrong when they drift from the sample.
- **Tech stack grid is 4 columns** — use 8 or 12 items or the last row goes ragged.
- **`html { overflow-x: clip }`** is deliberate: the hero traces SVG and the mobile
  nav strip bleed by design. `clip`, not `hidden` — `hidden` would make the root a
  scroll container and break sticky positioning and smooth scroll.
- **Window dots are decorative**, `aria-hidden`, and carry no interactive
  semantics. Anything that looks pressable must do something.
- Diagram SVG text is sized in **viewBox units, not CSS px** — it is not on the CSS
  type ramp, by design.
- The `@media print` block deliberately leaves the palette (white/black/`#999`).

## Verify like this

No test suite. Serve and look:

```bash
python -m http.server 4891    # then http://127.0.0.1:4891
```

Check desktop and a ~390px viewport together. Confirm `scrollWidth ===
clientWidth` at 320px after layout changes.
