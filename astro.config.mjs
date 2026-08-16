import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Zmien na docelowa domene klienta - od tego zaleza kanoniczne URL-e i sitemap.
export default defineConfig({
  site: 'https://import-aut.pl',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
