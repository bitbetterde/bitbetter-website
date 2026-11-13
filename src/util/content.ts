import { getCollection, getEntry, type CollectionKey, type CollectionEntry } from 'astro:content'

async function findCollectionItemsByIdOrTitle<C extends CollectionKey>(
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

/**
 * All blog posts that aren't hidden or previews, for every list of posts (home page, blog
 * overview, RSS feed). Hidden and preview posts still get their own page, so don't use this to
 * build the post pages.
 */
const getVisibleBlogPosts = () =>
  getCollection('blog', (post) => !post.data.hidden && !post.data.preview)

const loadLatestBlogPostsWithAuthors = async () => {
  const latestBlogPosts = (await getVisibleBlogPosts()).sort(
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

export {
  getAllToolKeywords,
  findCollectionItemsByIdOrTitle,
  getVisibleBlogPosts,
  loadLatestBlogPostsWithAuthors,
}
