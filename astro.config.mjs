// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nixiafabric.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
});
