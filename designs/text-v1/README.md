# Text v1 — Backup Design

The plain text-based version of jordi.quest ("90% plain text + 10% fancy").

## What it was
- Plain document layout: system-ui body, 70ch max width
- 10% warmth: single accent color (#8a6d3b), Georgia serif headings,
  gentle fade-in, accent list markers, hover transitions
- No graphics, no webfonts, no favicon, no cards

## Files
| File | Original location |
|------|-------------------|
| `app.css` | `src/app.css` |
| `app.html` | `src/app.html` |
| `QuestPage.svelte` | `src/lib/components/QuestPage.svelte` |

## To restore
Copy files back to their original locations (see table above), remove the
favicon `<link>` from `src/app.html` if present, and delete `static/favicon.svg`
/ `static/icon-512.svg`. Translations in `src/lib/i18n/index.js` are shared
and still compatible.
