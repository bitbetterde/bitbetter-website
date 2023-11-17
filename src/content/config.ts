import { z, defineCollection } from 'astro:content'

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
    author: z.string().optional(),
  }),
})

const authorCollection = defineCollection({
  type: 'data',
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    image: z.string(),
  }),
})

export const collections = {
  stack_development: techStackCollection,
  stack_consulting: techStackCollection,
  blog: blogCollection,
  authors: authorCollection,
}
