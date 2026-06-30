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
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    subtitle: z.string(),
    teaser: z.string(),
    date: z.date(),
    update: z.date().optional(),
    authors: z.array(reference('authors')),
    hidden: z.boolean().optional(),
    keywords: z.string(),
  }),
})

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    subtitle: z.string().optional(),
    teaser: z.string(),
    date: z.date(),
    keywords: z.string(),
    hidden: z.boolean().optional(),
  }),
})

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    image: z.object({
      default: z.string(),
      webp: z.string().optional(),
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
