import { getCollection, getEntry, type AnyEntryMap, type CollectionEntry } from 'astro:content'

async function findCollectionItemsByIdOrTitle<C extends keyof AnyEntryMap>(
  collection: C,
  ids: string[],
): Promise<Array<CollectionEntry<C>['data']>> {
  const allItems = await getCollection(collection)

  return ids
    .map(
      (toolName) =>
        allItems.find(
          (tool) =>
            tool.id.toLowerCase() === toolName.toLowerCase() ||
            ('title' in tool.data && tool.data.title.toLowerCase() === toolName.toLowerCase()),
        )?.data,
    )
    .filter(Boolean) as Array<CollectionEntry<C>['data']>
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
