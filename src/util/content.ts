import { getCollection, type ContentEntryMap, type DataEntryMap } from 'astro:content'

const findCollectionItemsByIdOrTitle = async (
  collection: keyof ContentEntryMap | keyof DataEntryMap,
  ids: string[],
) => {
  const allItems = await getCollection(collection)

  return ids
    .map(
      (toolName) =>
        allItems.find(
          (tool) =>
            tool.id.toLowerCase() === toolName.toLowerCase() ||
            tool.data.title.toLowerCase() === toolName.toLowerCase(),
        )?.data,
    )
    .filter(Boolean)
}

const getAllToolKeywords = async () => {
  const allTools = await getCollection('tools')

  return allTools
    .map((tool) => tool.data.title)
    .filter(Boolean)
    .join(',')
}

export { getAllToolKeywords, findCollectionItemsByIdOrTitle }
