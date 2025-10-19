import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-22420.web.app/',      // update later
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: { alias: { '@': '/src' } }     // enables "@/..." imports
  }
});
