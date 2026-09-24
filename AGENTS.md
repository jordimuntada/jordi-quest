# jordi.quest — Agent Context

## Project Identity
- **Name**: jordi.quest
- **URL**: https://jordi.quest
- **Purpose**: A text-based website about purpose, dreams that must come true, and AI as a means to achieve them.
- **Framework**: SvelteKit with Vercel adapter
- **Deployment**: Vercel (SvelteKit framework preset)
- **Languages**: English (default), Catalan (/ca), Spanish (/es)

## Architecture
- **Frontend**: SvelteKit 5.x, Vite 6.x
- **Adapter**: `@sveltejs/adapter-vercel` for Vercel deployment
- **Styling**: Breathable design — warm neutrals, Newsreader + Inter webfonts, breath gradient orb, soft cards. SVG favicon ("j" quest path in gradient circle).
- **i18n**: Route-based — `src/lib/i18n/index.js` holds all translations; one shared component renders all languages.
- **Backups**: `designs/text-v1/` (plain text version, available for later use)

## Key Files
| File | Purpose |
|------|---------|
| `svelte.config.js` | SvelteKit config with Vercel adapter |
| `src/app.css` | Breathable design system (warm neutrals) |
| `src/app.html` | HTML shell (webfonts, favicon) |
| `static/favicon.svg` | "j" quest-path favicon |
| `static/icon-512.svg` | Touch icon (512px) |
| `src/lib/i18n/index.js` | All EN/CA/ES translations |
| `src/lib/components/QuestPage.svelte` | Shared page component (lang prop) |
| `src/routes/+page.svelte` | English (default) |
| `src/routes/ca/+page.svelte` | Catalan |
| `src/routes/es/+page.svelte` | Spanish |
| `designs/text-v1/` | Backed-up plain text design |
| `.env` | Public env vars (safe to commit) |
| `.env.local` | Private secrets (gitignored) |

## Page Sections (order)
1. Purpose — why this exists
2. Dreams that must come true — commitments as a list
3. AI as a means — short manifesto + quote
4. Projects — Hours.es and Fusta.App
5. On purpose — direction / filter / fuel
6. Contact — mailto link

## Design Principles
1. **Breathable**: Lots of whitespace, slow rhythm, calm warm neutrals
2. **Soft visuals**: Breath gradient orb, rounded cards with gentle hover lift
3. **Typography**: Newsreader (serif headings) + Inter (body) via Google Fonts
4. **Palette**: #FAF9F6 bg, #1A1A18 ink, sage/clay/sky accents
5. **Accessible**: reduced-motion respected where applicable, semantic HTML

## Development Commands
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Deployment
- Platform: Vercel
- Framework preset: SvelteKit (builds with `npm run build`, no custom start command)

## Related Projects
- **Hours.es**: Marketplace of spaces to rent by the hour (rooms, studios, venues)
- **Fusta.App**: Wood for carpenters and makers (raw wood / wood transformed into furniture)

## Rules for Agents
- Keep the text-based aesthetic; do not reintroduce graphics or webfonts without request
- Edit translations in `src/lib/i18n/index.js` (keep all three languages in sync)
- Structural changes go in `QuestPage.svelte` (shared by all languages)
- Keep `@sveltejs/adapter-vercel` as the adapter (deployment target is Vercel)
- Update this file when adding major features or changing architecture
