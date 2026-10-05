import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = process.env.SITE_BASE || '/';
const preview = process.env.PUBLIC_SITE_PREVIEW === 'true' || base !== '/';
export default defineConfig({
  site: 'https://qbbuildingsolutions.com',
  base,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !preview && !/\/(404(?:\.html)?|projects|privacy-policy)\/?$/.test(new URL(page).pathname) })],
});
