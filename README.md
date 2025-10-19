# Portfolio Website

Modern portfolio built with Astro, featuring fast performance, SEO optimization, and accessibility.

## Features

- Server-side rendering with Astro
- MDX support for case studies
- Dark/light theme toggle
- Accessible keyboard navigation
- SEO optimized with sitemap
- Privacy-friendly analytics (Plausible)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```env
   PUBLIC_ANALYTICS_DOMAIN=your-domain.com
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Analytics & Privacy

This site uses [Plausible Analytics](https://plausible.io), a privacy-friendly analytics tool that:
- Does not use cookies
- Does not collect personal data
- Is GDPR, CCPA, and PECR compliant
- Only tracks page views and referrers

Analytics only load in production builds. In development, no tracking occurs.

To disable analytics, remove the `PUBLIC_ANALYTICS_DOMAIN` environment variable.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

Deployed to Firebase Hosting. Build outputs to `dist/`.

```bash
npm run build
firebase deploy --only hosting
```

## License

MIT