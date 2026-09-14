# Implementation Guide for jordi.quest

## Quick Start

### Prerequisites
- Node.js 18+ 
- Railway CLI (installed)
- Railway account (connected)

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server (Railway)
npm run start
```

## Project Structure

```
jordi.quest/
├── src/
│   ├── app.html          # HTML shell with fonts
│   ├── app.css           # Design system & styles
│   ├── routes/
│   │   ├── +layout.svelte # Layout component
│   │   └── +page.svelte   # Main page
├── package.json          # Dependencies & scripts
├── svelte.config.js      # SvelteKit config
├── vite.config.js        # Vite config
├── railway.json          # Railway deployment
├── .env                  # Public variables
├── .env.local           # Private secrets
├── .gitignore            # Git exclusions
├── AGENTS.md            # Agent context
├── RULES.md             # Project rules
└── CLAUDE.md            # Claude context
```

## Design System

### Color Palette
- `--bg`: #FAF9F6 (off-white)
- `--ink`: #1A1A18 (dark)
- `--muted`: #6B6B67 (subtle)
- `--line`: #E8E5DE (border)
- `--sage`: #DCE5DB (soft green)
- `--clay`: #E9DCCF (soft beige)
- `--sky`: #DCE6EB (soft blue)

### Typography
- **Headings**: Newsreader (serif)
- **Body**: Inter (sans-serif)
- **Size**: 17px base, clamp() fluid sizing

### Layout
- Max width: 720px
- Padding: 1.5rem sides
- Spacing: generous whitespace

## Deployment

### Railway Setup
1. Ensure Railway CLI is installed
2. Run `railway login` to authenticate
3. Run `railway up` to deploy current directory
4. Railway will automatically:
   - Run `npm ci && npm run build`
   - Start with `npm run start`
   - Restart on failure

### Environment Variables
- `PUBLIC_SITE_URL`: Your domain URL
- `PUBLIC_APP_NAME`: App name

## Content Guidelines

### Purpose Section
- 2-3 sentences max
- Calm, certain tone
- Focus on "why this exists"

### Dreams Section
- One line per dream
- One sentence context each
- Treat as commitments, not wishes

### AI Section
- Manifesto-style
- AI as leverage, not the goal
- Emphasize human-centered approach

### Projects Section
- Include Hours.es and Fusta.App
- Brief, benefit-focused descriptions
- Links to live sites

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed
- High contrast colors

## Performance
- Gzip compression enabled
- Critical CSS inlined
- Lazy loading for images
- Minimal JavaScript footprint

## Maintenance

### Adding New Sections
1. Follow existing markup patterns
2. Use CSS custom properties
3. Maintain breathing room
4. Test on mobile first

### Updating Content
- Replace placeholder text
- Keep sections concise
- Maintain the "breathable" aesthetic
- Update links as needed

### Troubleshooting
- Build fails: Check `npm run build`
- Style issues: Verify CSS variables
- Deployment issues: Check railway.json config
- Font loading: Verify app.html links