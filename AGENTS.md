# jordi.quest — Agent Context

## Project Identity
- **Name**: jordi.quest
- **URL**: https://jordi.quest
- **Purpose**: A text-based website about purpose, dreams that must come true, and AI as a means to achieve them.
- **Framework**: SvelteKit with Node.js adapter
- **Deployment**: Railway (configured via railway.json)
- **Languages**: English (default), Catalan (/ca), Spanish (/es)

## Architecture
- **Frontend**: SvelteKit 5.x, Vite 6.x
- **Adapter**: `@sveltejs/adapter-node` for Railway deployment
- **Styling**: Plain text base + ~10% warmth (one accent color, serif headings via system serif stack, subtle fade-in). No webfonts, no graphics, no favicon.
- **i18n**: Route-based — `src/lib/i18n/index.js` holds all translations; one shared component renders all languages.
- **Archived design**: `designs/breathable-v1/` (original airy design with gradients, webfonts, cards — available for later use)

## Key Files
| File | Purpose |
|------|---------|
| `railway.json` | Railway deployment config |
| `svelte.config.js` | SvelteKit config with Node adapter |
| `src/app.css` | Text-first stylesheet with warm accent |
| `src/app.html` | HTML shell (no fonts, no favicon) |
| `src/lib/i18n/index.js` | All EN/CA/ES translations |
| `src/lib/components/QuestPage.svelte` | Shared page component (lang prop) |
| `src/routes/+page.svelte` | English (default) |
| `src/routes/ca/+page.svelte` | Catalan |
| `src/routes/es/+page.svelte` | Spanish |
| `designs/breathable-v1/` | Archived original design |
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
1. **Text-first**: Content reads like a plain document; decoration is minimal
2. **10% fancy only**: One accent color (#8a6d3b), system serif headings (Georgia), subtle hover transitions, gentle fade-in, accent list markers
3. **No graphics**: No images, no icons, no favicon, no gradients, no shadows
4. **No webfonts**: system-ui for body, Georgia/serif stack for headings
5. **Accessible**: prefers-reduced-motion respected, semantic HTML

## Development Commands
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run start    # Start production server (Railway)
```

## Deployment
- Platform: Railway
- Build command: `npm ci && npm run build`
- Start command: `npm run start`
- Restart policy: ON_FAILURE

## Related Projects
- **Hours.es**: Marketplace of spaces to rent by the hour (rooms, studios, venues)
- **Fusta.App**: Furniture selection / interior design application

## Rules for Agents
- Keep the text-based aesthetic; do not reintroduce graphics or webfonts without request
- Edit translations in `src/lib/i18n/index.js` (keep all three languages in sync)
- Structural changes go in `QuestPage.svelte` (shared by all languages)
- Maintain railway.json for deployment compatibility
- Update this file when adding major features or changing architecture
