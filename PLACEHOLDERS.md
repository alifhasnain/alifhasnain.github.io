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

## 1. Identity — **done**

Filled from `cv-markdown.md` (which is now gitignored — see §7). No identity
tokens remain.

| Value | Where it shows |
|---|---|
| Mohammad Alif Hasnain | `<title>`, OG tags, README pane, `whoami`, footer, portrait `alt` |
| `hasnain.alif20@gmail.com` | top bar, contact session, `send_mail()`, `copy_email()` |
| `+88 01684 336113` | contact session + a `tel:` link in the contact list |
| Dhaka, Bangladesh | SYSTEM.INFO `BASED`, README pane, contact session |
| `github.com/alifhasnain` | top bar, `view_all_repos()`, contact list, contact session |
| `linkedin.com/in/alif-hasnain-850002153` | top bar, contact list, contact session |
| 2026 | footer copyright — bump each January, or automate it in `site.js` |

Two open choices:

- **Name form.** The page uses **Mohammad Alif Hasnain**, the form your own CV
  header uses. Your git config and both handles say *Alif Hasnain*. If you prefer
  the short form it is one find/replace.
- **Résumé filename.** Three links now point at `assets/alif-hasnain-resume.pdf`.
  That file does not exist yet — create it under exactly that name or rename the
  three `href`s together.
- **Stack Overflow** — **done.** `stackoverflow.com/users/8521094/alif-hasnain`, in
  both `contact.json` and the contact link list, with a new authored `#i-stack`
  icon. The `contact.json` keys were re-aligned to the longer `"stackoverflow":`.

## 2. Experience — **done**, bullets are thin

Two real roles, no tokens:

| Role | Where | When |
|---|---|---|
| Senior Mobile App Developer | SSL Wireless · Dhaka | Jun 2023 – Present |
| Software Engineer (Mobile) | IOTA Infotech Limited · Dhaka | Feb 2021 – Jun 2023 |

Mediapark was dropped at your instruction. The `warn` (amber) styling came off the
employer names — amber means *unverified* in this system, and these are now real.

⚠ **The bullets carry no metrics, on purpose.** The old ones (`[N]-screen finance
app`, `cold start down [X]%`) were invented, and invented bullets attached to a
*named* employer stop being placeholders and become false claims. What is there
now comes only from sourced material: the SSL Wireless lines from the two
architectures you introduced (the same ones the projects band documents), the IOTA
lines from your CV's own wording.

- [ ] **Give each role one outcome you can defend** — a number, a scale, a
      before/after. That is the single highest-value edit left on the page.

## 3. Numbers and metrics

| Token | Where | Note |
|---|---|---|
| ~~`[9]` `[7]` `[3]`~~ | SYSTEM.INFO | **Done** — four real rows: Kotlin 9, Dart 8, Java 8, Swift 7. Bar widths are `style="--fill:N"`, set to 14/12/12/11 (≈1.55 blocks per app; the 134px track holds 16). Change a count and change its `--fill` with it. |
| ~~`[N] shipped apps`~~ | SYSTEM.INFO | **Done** — `35+ apps`. The four language counts sum to 32, so 35+ leaves room for the rest; keep those consistent if you edit either. |
| `[N] working days` | contact session | Your real reply time |
| ~~`[N] years`~~ | README pane | **Done** — reads `5+ years`, computed from Feb 2021 (IOTA start) to now. Bump the phrasing if you count differently. |
| `[CLAUDE_CODE_101_URL]` | `#credentials` → Certifications | Verification URL for the Claude Code 101 certificate. The other two rows link to real proofs (Coursera verify page, Google Drive PDF). Until this is real the row still opens a new tab — to a dead address. |

The GitHub statistics panel and its seeded contribution grid are **gone**, along
with `heatmap()` in `assets/js/site.js` and the `.gh*` / `.heat*` CSS. The
`#opensource` column replaced them and carries no placeholders — every value in
it (`MIT`, `0.1.0`, `Android`, `dio`) is read from the `falconer` repo.

## 4. Files you must add

| Path | What |
|---|---|
| `assets/alif-hasnain-resume.pdf` | ⚠ **Missing.** Three links point at this exact name — top bar (visible at every scroll depth), `download_cv()`, and the contact pane. Until the file exists, your second CTA 404s. |
| ~~`assets/img/portrait-placeholder.svg`~~ | **Done** — `assets/img/portrait.webp` is a real photo at 620×720. The pane is greyscaled by CSS (`.portrait__frame img`); the source is already monochrome, so that filter only adds the contrast/brightness trim. |
| `assets/img/og.png` | Social share image, 1200×630. Referenced by `og:image`. |

## 5. Sample content — authored, replace when you can

These are written at full quality so the layout is real, and are marked
`// sample` on the page. They are demonstrations, not claims:

- **Projects band** — now real content, not samples. Two architecture diagrams
  (`android_mvvm.dio`, `riverpod_flow.dio`), the `~/projects` explorer holding 20
  projects across three platform groups, and four deep-dive panes
  (`migration.md`, `bangla-qr.md`, `sslcommerz-sdk.md`, `cashbaba-sdk.md`).
  Each explorer row is a native `<details>` — it opens with JavaScript off, by
  keyboard, and by touch. Inside: a detail paragraph, stack tags, variant chips
  where a family exists, and a store link where the app is actually listed.
  **Fourteen listings are linked. Twelve return 200; two do not — see below:**
  - **Eight whole-row `play_store()` controls** — easy-merchant (flutter),
    sslcommerz-merchant, emi-locker, rmg-erp, silknet, banglapay, nrb-click,
    luxxle. To add another, drop an `<a class="tree__store" …>` into that row's
    `.tree__panel`.
  - **Six linked variant chips** — inside a family row a listed sibling becomes
    the link itself, because the chip already names the app. Janata QR Merchant,
    Rupali Merchant and SEBL Merchant in `bangla-qr-merchant`; all three of
    Bhalobashar Gulshan, Quick Response and Quick Response Dhanmondi in
    `bhalobashar-gulshan`. Markup is
    `<li class="has-store"><a …>Name<svg class="tree__kid-ico">…</svg></a></li>`
    with an `aria-label` naming the store and the new tab, since the play glyph is
    `aria-hidden`. A plain `<li>` stays a plain chip; both render at the same
    height so the family still reads as one set.
- ⚠ **Two linked chips point at listings that are not live yet.** Rupali Merchant
  (`com.sslwireless.rupalimerchant`) and SEBL Merchant (`com.sslwireless.seblmerchant`)
  both return HTTP 404 from Google Play — retried with `gl=BD&hl=en` and a desktop
  user agent. Linked anyway, on the owner's explicit instruction: the listings are
  pending publication and the URLs will resolve once they go live. **Re-check both
  before treating the page as publish-ready** — until they publish, two chips in the
  five-bank family open a Google Play error page.
- ⚠ **Partner App stays unlinked.** `com.sslwireless.partner_app` also 404s, and it
  is the likeliest permanent case: an enterprise app distributed through Managed
  Google Play has no public listing and never will. Star Cineplex has no package ID
  yet. See DATA-NEEDED.md.
  Sourced from `projects/**` — which is **not** gitignored, and whose summaries
  contain bundle ids, internal class names, endpoint paths, distribution URLs and
  a crypto wire format. None of that reached the page; see §7.
- ~~**Four code panes**~~ — **removed** at the owner's request:
  `TransactionScreen.kt`, `txn_controller.dart`, `build.sh`, `pubspec.yaml`, and
  with them `[PROJECT_A]`. ⚠ The page now renders **no code at all**, which
  leaves `.code*` (site.css ~503–527, including the whole `.k .f .t .s .n .an .p
  .a .c` syntax palette) unused. The rules were kept, not deleted: DESIGN.md
  documents the Editor Pane as this system's *signature component*, and deleting
  its implementation as a side effect of a content edit would put the design
  system out of sync with the code. Reinstate a code pane and it works as-is.
- ~~**Notes band**~~ — **deleted.** Three invented titles pointing at
  `[POST_URL_1..3]` were three dead links. The `.note*` CSS and the
  `grid--notes` / `md--tight` rules went with them.
- **`platform_choice.md` pane** — this is the one section a competitor cannot
  copy from you. Read it, then make it genuinely yours.

## 6. Remove the draft marker when done

- `.draftchip` in the top bar (`● draft`)
- `.samplechip` — no longer used in the markup; the CSS rule is kept because
  DESIGN.md documents it as a chip variant. Reach for it if you ever ship a
  number that is real but not yet verifiable.
- every `<span class="sample">// …</span>` note
- the typed footer command `data-type="cat PLACEHOLDERS.md"` → change to
  whatever you like

## 7. Personal data — keep it out of the repo

This repo is public. `.gitignore` holds two files back for that reason:

- `DATA-NEEDED.md` — the content worksheet.
- `cv-markdown.md` (and `cv-*.md`) — the résumé export. It contains a **home
  street address**, a personal mobile number, and a personal email. It was
  untracked but *unignored*, so a single `git add .` would have published the home
  address permanently. Ignored now.

⚠ **`projects/` is NOT ignored.** Its 22 summaries are the richest disclosure risk
in the repo: bundle ids (`com.sslwireless.*`, `com.sbac`), internal class names,
`/api/v1` endpoint paths, Maven coordinates, distribution and internal hostnames,
and the exact AES wire format used to encrypt PINs before transport at a PCI-DSS
gateway. None of it reached `index.html` — verified by grep — but committing the
directory publishes all of it. Decide deliberately: ignore it, or move it out of
the repo.

The street address was deliberately **not** put on the site: no employer needs it
before an offer, and a permanently-indexed home address serves no hiring purpose.
The phone number *is* published, by explicit choice.

## Check before you publish

```
grep -n "\[" index.html          # only the exceptions below should remain
```

Four kinds of brackets survive on purpose — design, not tokens: the nav indices
`[01]`–`[06]`, Kotlin/Dart array syntax in the samples (`items[i]`), and the two
honest unknowns `[N] apps` / `within [N] working days`. `[PROJECT_A]` is the last
real token.

Then confirm: no invented employer, no metric you cannot source, and that
`assets/alif-hasnain-resume.pdf` actually exists.
