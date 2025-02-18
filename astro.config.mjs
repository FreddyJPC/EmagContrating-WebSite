// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Agrega la integración de React

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // Mantén la integración de Tailwind
    react(), 
       // Agrega la integración de React
  ],
});
