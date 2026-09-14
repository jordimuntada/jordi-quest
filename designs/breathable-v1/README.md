# Breathable v1 — Archived Design

The original "breathable" design for jordi.quest.

## What it was
- Warm off-white background (#FAF9F6), sage/clay/sky accents
- Newsreader (serif) + Inter (sans) Google Fonts
- Animated "breath" gradient orb in the hero
- Rounded cards with soft shadows and hover lift
- Custom SVG favicon ("j" quest path inside gradient circle)

## Files
| File | Original location |
|------|-------------------|
| `app.css` | `src/app.css` |
| `app.html` | `src/app.html` |
| `QuestPage.svelte` | `src/lib/components/QuestPage.svelte` |
| `favicon.svg` | `static/favicon.svg` |
| `icon-512.svg` | `static/icon-512.svg` |

## To restore
Copy files back to their original locations (see table above) and re-add
the Google Fonts `<link>` tags and favicon reference to `src/app.html`.
Translations in `src/lib/i18n/index.js` are shared and still compatible.
