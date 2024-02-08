import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const content = (await getCollection('blog')).sort((a, b) => b.data.date - a.data.date)
  return rss({
    title: 'bitbetter blog',
    description:
      'Wir sind zwei Software-Entwickler aus Hamburg und lösen Probleme im Bereich der Digitalisierung: Making the world a bit better.',
    site: context.site,
    items: content.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>de-DE</language>`,
  })
}
