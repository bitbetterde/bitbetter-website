import { z, reference, defineCollection } from 'astro:content'

const techStackCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number().optional(),
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
    authors: z.array(reference('authors')),
    hidden: z.boolean().optional(),
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
    subtitle: z.string(),
    teaser: z.string(),
    date: z.date(),
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
  }),
})

export const collections = {
  stack_development: techStackCollection,
  stack_consulting: techStackCollection,
  blog: blogCollection,
  authors: authorCollection,
  services: servicesCollection,
}
