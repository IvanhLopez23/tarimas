// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Drives canonical URLs, og:url and the sitemap.
  site: 'https://tarimaslogisticapro.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});