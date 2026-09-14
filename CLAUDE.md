# CLAUDE.md — Claude Code Context for jordi.quest

## Project Overview
jordi.quest is a personal, text-based website built with SvelteKit, deployed to Railway. It represents a philosophy: purpose, dreams that must come true, and AI as the means to achieve them. Available in English (default), Catalan, and Spanish.

## Current State
- **Framework**: SvelteKit 5.x (Node adapter)
- **Design**: Breathable — warm neutrals, Newsreader + Inter webfonts, breath gradient orb, soft cards, "j" quest-path SVG favicon
- **Deployment**: Railway (railway.json), domain jordi.quest
- **Status**: Draft — placeholder content awaiting real copy
- **Backed up**: The plain text version lives in `designs/text-v1/`

## Architecture
- `src/lib/i18n/index.js` — all translations (en/ca/es), single source of truth
- `src/lib/components/QuestPage.svelte` — shared page, `lang` prop
- `src/routes/+page.svelte`, `src/routes/ca/+page.svelte`, `src/routes/es/+page.svelte` — thin wrappers

## Sections
1. Purpose
2. Dreams that must come true (list)
3. AI as a means (manifesto + quote)
4. Projects: **Hours.es** (marketplace of spaces to rent by the hour) and **Fusta.App** (furniture/design)
5. On purpose (direction / filter / fuel)
6. Contact (mailto)

## Claude's Role
- Preserve the text-based aesthetic (see RULES.md)
- Keep all three languages in sync when editing content
- Ensure Railway deployment compatibility
- Update AGENTS.md and RULES.md when architecture changes
- Ask for real content before removing placeholders

## Development Workflow
1. Edit translations or QuestPage
2. Test with `npm run dev`
3. Verify with `npm run build`
4. Deploy via Railway
