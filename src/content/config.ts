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
export const collections = {
  stack_development: techStackCollection,
  stack_consulting: techStackCollection,
}
