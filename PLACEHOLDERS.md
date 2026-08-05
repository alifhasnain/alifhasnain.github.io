# Placeholders — your replacement list

> **Collecting your content?** Use [DATA-NEEDED.md](DATA-NEEDED.md) instead — it's
> the same ground as a fill-in questionnaire, with length limits and a paste-ready
> block, and it doesn't need the code open. This file is the developer view: which
> token sits in which file.

This site is a **draft**. Every value below is a token, not a claim. Tokens use
`[BRACKET_CASE]`, which reads as a template variable inside the site's
developer-environment look — so the draft never looks broken, and nothing on the
page pretends to be verified.

Search and replace with your editor. Start at the top; the first four tokens
appear the most times.

> **Do not skip the `[N]` / `[X]%` / `[1.2K]` numbers.** A hiring page with an
> invented metric is worse than one with no metric. Replace them with real
> figures or delete the line.

---

## 1. Identity — replace everywhere

| Token | What it is | Where it shows |
|---|---|---|
| `[YOUR_NAME]` | Your full name | `<title>`, OG tags, README pane, contact session, footer, résumé filename |
| `[YOUR_HANDLE]` | GitHub / LinkedIn username | top bar, GitHub panel, contact links |
| `[YOU]@[DOMAIN]` | Your email address | top bar, contact session, `send_mail()`, `copy_email()` |
| `[YOUR_CITY]`, `[COUNTRY]` | Where you are based | SYSTEM.INFO, README pane, contact session |
| `[YEAR]` | Copyright year | footer |

## 2. Experience — `#experience`

| Token | What it is |
|---|---|
| `[COMPANY_A]` `[COMPANY_B]` `[COMPANY_C]` | Real employers, most recent first |
| `[CITY]` | Office/remote location per role |
| `[2022]` `[2020]` `[2018]` | Start and end years |
| `[N]-screen`, `[X]%` | Only if you can cite the real number. Otherwise rewrite the bullet without one. |

Job titles (`Senior Mobile App Developer`, `Mobile App Developer`,
`Android Developer`) and the achievement bullets are drafts written to the right
shape — rewrite them in your own words.

## 3. Numbers and metrics

| Token | Where | Note |
|---|---|---|
| `[9]` `[7]` `[3]` | SYSTEM.INFO language share | Count of shipped apps per language. The bar widths are set by `style="--fill:N"` on each `.meter` — adjust to match. |
| `[N] shipped apps` | SYSTEM.INFO caption | |
| `[1.2K]` `[1.1K]` `[24]` | GitHub panel | Marked `sample data` on the page. Replace or delete the panel. |
| `[N] working days` | contact session | Your real reply time |
| `[N] years` | README pane | |

The contribution grid is **generated, seeded sample texture**
(`heatmap()` in `assets/js/site.js`) and is `aria-hidden`. Replace it with a real
embed or delete the `#heat` element and its caption.

## 4. Files you must add

| Path | What |
|---|---|
| `assets/[YOUR_NAME]-resume.pdf` | Your résumé. Three links point at it — rename the file *and* the three `href`s together. |
| ~~`assets/img/portrait-placeholder.svg`~~ | **Done** — `assets/img/portrait.webp` is a real photo at 620×720. The pane is greyscaled by CSS (`.portrait__frame img`); the source is already monochrome, so that filter only adds the contrast/brightness trim. The `alt` still carries `[YOUR_NAME]`. |
| `assets/img/og.png` | Social share image, 1200×630. Referenced by `og:image`. |

## 5. Sample content — authored, replace when you can

These are written at full quality so the layout is real, and are marked
`// sample` on the page. They are demonstrations, not claims:

- **Projects band** — `TransactionList.kt`, `transaction_list.dart`,
  `pubspec.yaml`, `build.sh`, and the two architecture diagrams. Swap in code
  from your own repos. Keep the line-number gutter in sync: the `.code__gut`
  block lists one number per line.
- **Notes band** — three post titles and blurbs, dated `[YYYY-MM]`. The three
  `read()` links point at `[POST_URL_1]` … `[POST_URL_3]`; give them real URLs or
  delete the section (also remove `[05] notes` from the top nav and the rail).
- **`[PROJECT_A]`** — the repo name in the `build.sh` terminal prompt.
- **`platform_choice.md` pane** — this is the one section a competitor cannot
  copy from you. Read it, then make it genuinely yours.

## 6. Remove the draft marker when done

- `.draftchip` in the top bar (`● draft`)
- `.samplechip` in the GitHub panel (`sample data`)
- every `<span class="sample">// …</span>` note
- the typed footer command `data-type="cat PLACEHOLDERS.md"` → change to
  whatever you like

## Check before you publish

```
grep -n "\[" index.html          # no bracket tokens should remain
```

Two kinds of brackets survive that check on purpose — they are design, not
tokens: the nav indices `[01]`–`[06]`, and Kotlin/Dart array syntax inside the
code samples (`items[i]`).

Then confirm: no invented employer, no metric you cannot source, no `resume.pdf`
link pointing at a file that does not exist.
