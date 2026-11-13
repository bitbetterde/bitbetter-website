import { reference, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    internalPage: z.string().optional(),
  }),
})

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
      subtitle: z.string(),
      teaser: z.string(),
      date: z.date(),
      update: z.date().optional(),
      authors: z.array(reference('authors')),
      // Hidden posts are left out of every list (home page, blog overview, RSS feed), but are still
      // built, reachable by their URL, listed in the sitemap and indexable.
      hidden: z.boolean().optional(),
      // Secret token for sharing an unpublished post, e.g. for review. The post then only exists at
      // /blog/<slug>/<token>/ and is left out of every list and the sitemap and marked noindex.
      // Remove the token to publish the post at /blog/<slug>/. Generate one with: openssl rand -hex 8
      preview: z
        .string()
        .regex(/^[A-Za-z0-9_-]{12,}$/, 'At least 12 characters: letters, digits, - or _')
        .optional(),
      keywords: z.string(),
    }),
})

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      subtitle: z.string().optional(),
      teaser: z.string(),
      date: z.date(),
      keywords: z.string(),
    }),
})

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      homepage: z.string().optional(),
      fediverse: z.string().optional(),
    }),
})

const customersCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/customers' }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    href: z.string(),
    order: z.number(),
  }),
})

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  services: servicesCollection,
  tools: toolsCollection,
  customers: customersCollection,
}
