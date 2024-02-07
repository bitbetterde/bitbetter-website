import { getCollection } from 'astro:content'

const developmentTechItems = (await getCollection('stack_development'))
  .map((c) => c.data)
  .sort((a, b) => (a.order || 0) - (b.order || 0))

const consultingTechItems = (await getCollection('stack_consulting'))
  .map((c) => c.data)
  .sort((a, b) => (a.order || 0) - (b.order || 0))

const techstackKeywords = [...developmentTechItems, ...consultingTechItems]
  ?.map((item) => item?.title)
  .join(', ')

export { developmentTechItems, consultingTechItems, techstackKeywords }
