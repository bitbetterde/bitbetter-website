import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'
import tailwind from '@astrojs/tailwind'
import rehypeExternalLinks from 'rehype-external-links'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://bitbetter.de',
  integrations: [react(), tailwind({ config: { applyBaseStyles: false } }), mdx()],
  vite: {
    plugins: [svgr()],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          // content: { type: 'text', value: ' 🔗' },
          target: '_blank',
        },
      ],
    ],
  },
})
