import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'
import rehypeExternalLinks from 'rehype-external-links'
import mdx from '@astrojs/mdx'
import { unified } from '@astrojs/markdown-remark'

import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://bitbetter.de',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
  markdown: {
    processor: unified({
      // German quotes: "Text" becomes „Text“. Single quotes stay English (‘…’) because
      // SmartyPants uses the closing single quote for apostrophes too (gibt’s, not gibt‘s).
      smartypants: {
        openingQuotes: { double: '„', single: '‘' },
        closingQuotes: { double: '“', single: '’' },
      },
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            // content: { type: 'text', value: ' 🔗' },
            target: '_blank',
          },
        ],
      ],
    }),
  },
  redirects: {
    '/leistungen/camunda': '/leistungen/camunda-automatisierung',
  },
})
