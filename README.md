# Portfolio — [YOUR_NAME]

Single-page portfolio for a Senior Mobile App Developer working across native
Android and Flutter. Static HTML, CSS, and JS. No build step, no npm, no
framework, no third-party request at runtime.

**Status: draft.** Content is placeholder.

- [DATA-NEEDED.md](DATA-NEEDED.md) — fill-in checklist of what to supply, with the
  length limits the layout imposes. Start here.
- [PLACEHOLDERS.md](PLACEHOLDERS.md) — which token sits in which file. The
  developer view of the same ground.

## Run it

Any static server. It also opens straight from disk, but serve it over HTTP so
the self-hosted fonts and the clipboard button behave the way they will in
production:

```bash
python -m http.server 4891          # then open http://127.0.0.1:4891
# or
npx --yes serve .
```

## Deploy it

Nothing to build, no environment variable to set. Works unchanged on GitHub Pages,
Netlify, Cloudflare Pages, or any bucket.

### Current state: deliberately unpublished

Live at `https://alifhasnain.github.io`, but **serving a holding page, not this
site.** Pages cannot be disabled on a `<user>.github.io` repo (the API returns
`422`), and pointing it at an empty branch just makes Pages keep serving the last
good build. So there are two branches:

| Branch | Contains | Role |
|---|---|---|
| `main` | this site | the real work; not currently served |
| `pages-holding` | one `noindex` holding page | what Pages serves today |

**To publish for real:** GitHub → Settings → Pages → Branch: `main`. Or:

```bash
gh api -X PUT repos/alifhasnain/alifhasnain.github.io/pages \
  --input - <<< '{"source":{"branch":"main","path":"/"}}'
```

Do that only after the bracket tokens are gone (`grep -n "\[" index.html`) — the
root URL is the address that goes on a résumé.

Do not delete `pages-holding`; it is the only way to take the site down again.

## Layout of the files

```
index.html                  the whole site — all content lives here
assets/css/site.css         tokens, layout, the boot sequence, responsive rules
assets/js/site.js           progressive enhancement only (see below)
assets/fonts/*.woff2        Martian Mono (display) + JetBrains Mono (code/UI)
assets/img/favicon.svg      authored mark
assets/img/portrait-placeholder.svg   replace with a real photo

PRODUCT.md                  durable product truth — who this is for, what is real
DESIGN.md                   the visual system, recorded from the built page
DATA-NEEDED.md              fill-in checklist of the content to supply
PLACEHOLDERS.md             every token you need to replace
.impeccable/surfaces/       per-surface strategy notes
inspiration.png             the pinned visual reference this build follows
```

## How to edit it

Content is written directly in `index.html` in plain semantic markup — no
templating, no data file to keep in sync. Find the section comment
(`══ PROJECTS ══`) and edit the text.

Two things to keep in step when you edit code samples:

1. `.code__gut` holds one line number per line of the sample beside it.
2. `.pane__status` shows a `line:column` readout in the pane's bottom-right.

Neither is functional; both look wrong if the numbers drift.

## What the JavaScript does

`assets/js/site.js` is enhancement only. Delete it and every section still
reads, navigates, and links correctly. It adds:

- the one-shot boot sequence (traces draw, title wipes, meters sweep)
- the typed footer command and the status-bar clock
- seeded sample texture for the contribution grid (`aria-hidden`)
- active-section tracking for the top nav and the left rail
- one settle-in transition for content below the fold
- `copy_email()`, with a stated failure path when the clipboard is blocked

Everything motion-related is gated on `prefers-reduced-motion`, and the CSS
keyframes are scoped to `html[data-boot="run"]` — so the page renders finished
if JS never arrives.

## Accessibility notes

- WCAG AA contrast on body text, including inside the code panes.
- Skip link, semantic landmarks, one `h1`, ordered headings.
- Keyboard operable throughout; code panes are focusable so they can be scrolled
  without a mouse.
- Window-chrome dots are decorative marks, not fake buttons — they carry no
  interactive semantics.
- `forced-colors` and `print` styles included.

## Contact form

There is none, by design: a static site has no server to post to. Contact runs
through `mailto:`, a copy-to-clipboard button, and direct profile links. If you
later want a real form, add a third-party endpoint (Formspree, Netlify Forms) —
that is the point at which a privacy notice becomes your responsibility.
