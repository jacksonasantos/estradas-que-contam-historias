// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://estradasquecontamhistorias.com",
  integrations: [sitemap()],
});

output: "static"

// Os arquivos em src/assets NÃO são servidos automaticamente em produção Astro/Vercel.
// Mova os arquivos SVG/PNG que precisam ser públicos para a pasta /public/assets
