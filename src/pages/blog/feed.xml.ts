import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const content = (await getCollection('blog')).sort((a, b) => (a.data.date > b.data.date ? -1 : 1))
  return rss({
    title: 'bitbetter blog',
    description:
      'Wir sind zwei Software-Entwickler aus Hamburg und lösen Probleme im Bereich der Digitalisierung: Making the world a bit better.',
    site: context?.site?.href || 'http://bitbetter.de',
    items: content.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.teaser,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>de-DE</language>`,
  })
}
