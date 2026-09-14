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
- **Breathable**: whitespace, slow rhythm, calm warm neutrals; soft cards with gentle hover lift
- **Palette**: only CSS custom properties from `app.css` (#FAF9F6 bg, #1A1A18 ink, sage/clay/sky accents)
- **Typography**: Newsreader (headings) + Inter (body) via Google Fonts
- **Animations**: Subtle, slow (3-6s durations), ease-in-out
- **Max width**: 720px content width for readability
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
