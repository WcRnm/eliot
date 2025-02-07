// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: netlify()
});