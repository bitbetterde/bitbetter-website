import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { getContainerRenderer as getMDXRenderer } from '@astrojs/mdx'

import reactRenderer from '@astrojs/react/server.js'
import rss, { type RSSFeedItem } from '@astrojs/rss'

import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { loadRenderers } from 'astro:container'
import { transform, walk } from 'ultrahtml'
import sanitize from 'ultrahtml/transformers/sanitize'

export async function GET(context: APIContext) {
  let baseUrl = context.site?.href || 'https://bitbetter.de'
  if (baseUrl.at(-1) === '/') baseUrl = baseUrl.slice(0, -1)

  const renderers = await loadRenderers([getMDXRenderer()])

  const container = await AstroContainer.create({ renderers })
  // Somehow, the React renderer needs to be added after the container was initialized (see: https://github.com/withastro/astro/issues/11697)
  container.addServerRenderer({ renderer: reactRenderer, name: 'reactRenderer' })

  // Load the content collection entries to add to our RSS feed.
  const posts = (await getCollection('blog')).sort((a, b) => (a.data.date > b.data.date ? -1 : 1))

  // Loop over blog posts to create feed items for each, including full content.
  const feedItems: RSSFeedItem[] = []
  for (const post of posts) {
    const { Content } = await post.render()
    const rawContent = await container.renderToString(Content)

    // Process and sanitize the raw content:
    // - Removes `<!DOCTYPE html>` preamble
    // - Makes link `href` and image `src` attributes absolute instead of relative
    // - Strips any `<script>` and `<style>` tags
    // Thanks @Princesseuh — https://github.com/Princesseuh/erika.florist/blob/1827288c14681490fa301400bfd815acb53463e9/src/middleware.ts
    const content = await transform(rawContent.replace(/^<!DOCTYPE html>/, ''), [
      async (node) => {
        await walk(node, (node) => {
          if (node.name === 'a' && node.attributes.href?.startsWith('/')) {
            node.attributes.href = baseUrl + node.attributes.href
          }
          if (node.name === 'img' && node.attributes.src?.startsWith('/')) {
            node.attributes.src = baseUrl + node.attributes.src
          }
        })
        return node
      },
      sanitize({ dropElements: ['script', 'style', 'LinkButton'] }),
    ])
    feedItems.push({
      ...post.data,
      pubDate: post.data.date,
      description: post.data.teaser,
      link: `/blog/${post.slug}/`,
      content,
    })
  }

  return rss({
    title: 'bitbetter blog',
    description:
      'Wir sind zwei Software-Entwickler aus Hamburg und lösen Probleme im Bereich der Digitalisierung: Making the world a bit better.',
    site: context?.site?.href || 'http://bitbetter.de',
    items: feedItems,
    customData: `<language>de-DE</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate><generator>astro</generator>`,
  })
}
