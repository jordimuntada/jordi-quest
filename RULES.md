# Rules for jordi.quest

## Code Style
1. **Minimal**: Only add dependencies when absolutely necessary
2. **Semantic HTML**: nav, header, main, section, footer, ol, dl, blockquote
3. **CSS-first**: Style with vanilla CSS in `src/app.css`; scoped styles only for tiny component-specific tweaks
4. **Accessible**: aria-current on active language link, prefers-reduced-motion respected

## File Organization
- Routes: `src/routes/` (EN at root, `/ca`, `/es`)
- Shared page: `src/lib/components/QuestPage.svelte`
- Translations: `src/lib/i18n/index.js` (single source, all languages)
- Styles: `src/app.css`
- Archived designs: `designs/<name>/` (never import from here)

## Design Constraints
- **Text-based**: The site must read like a document. No images, icons, favicons, or graphics
- **One accent color**: `--accent` (#8a6d3b) is the only non-neutral color
- **No webfonts**: system-ui for body, Georgia/'Times New Roman' serif for headings
- **No heavy effects**: no gradients, shadows, transforms (except the one gentle body fade-in)
- **Max width**: 70ch for readability
- **All three languages must stay in sync** — every visible string lives in `src/lib/i18n/index.js`

## Git Rules
- `.env.local` must NEVER be committed
- `node_modules/`, `/build`, `/.svelte-kit`, `.npm/` are gitignored
- Keep commits small and descriptive

## Environment Variables
- `PUBLIC_*` prefix for browser-exposed variables
- No secrets in `.env` (only in `.env.local`)

## Performance
- No external requests except outbound project links (hours.es, fusta.app)
- Keep bundle size minimal
