import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://bitbetter.de',
  integrations: [react(), tailwind({ config: { applyBaseStyles: false } })],
  vite: {
    plugins: [svgr()],
  },
})
