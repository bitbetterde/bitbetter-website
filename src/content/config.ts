import { z, reference, defineCollection } from 'astro:content'

const toolsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    internalPage: z.string().optional(),
  }),
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
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
  type: 'content',
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
  }),
})

const authorCollection = defineCollection({
  type: 'data',
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

export const collections = {
  blog: blogCollection,
  authors: authorCollection,
  services: servicesCollection,
  tools: toolsCollection,
}
