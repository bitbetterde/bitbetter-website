import { getCollection, getEntry, type ContentEntryMap, type DataEntryMap } from 'astro:content'

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

const loadLatestBlogPostsWithAuthors = async () => {
  const latestBlogPosts = (await getCollection('blog')).sort(
    (postA, postB) => postB?.data?.date?.getTime() - postA?.data?.date?.getTime(),
  )

  const loadLatestBlogPostsWithAuthors = await Promise.allSettled(
    latestBlogPosts.map(async (post) => {
      let authors = []

      for (const author of post.data.authors) {
        const authorObj = await getEntry(author.collection, author.id)
        if (authorObj) {
          authors.push(authorObj)
        }
      }

      return { ...post, authors }
    }),
  ).then((allPosts) =>
    allPosts.filter((p) => p.status === 'fulfilled').map((post) => ({ ...post.value })),
  )

  return loadLatestBlogPostsWithAuthors
}

export { getAllToolKeywords, findCollectionItemsByIdOrTitle, loadLatestBlogPostsWithAuthors }
