import type React from 'react'
import { Card, SectionMark } from '@components'
import BbBracket from '@assets/bb_bracket.svg?react'
import type { CollectionEntry } from 'astro:content'

interface NewsSectionProps {
  posts: Array<CollectionEntry<'blog'> & { authors: CollectionEntry<'authors'>[] }>
}

const NewsSection: React.FC<NewsSectionProps> = ({ posts }) => {
  return (
    <>
      <div className={'text-black lg:col-span-3 lg:col-start-2'}>
        <SectionMark
          title={"Was gibt's Neues"}
          className='mb-4 lg:mb-0'
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div
        className={
          'text-white col-span-9 grid grid-cols-1 lg:pr-8 2xl:pr-0 lg:grid-cols-2 gap-x-6 gap-y-16 z-10'
        }
      >
        {posts &&
          posts.map((post, i) => (
            <Card
              key={'news' + i}
              title={post.data.title}
              subtitle={post.data.subtitle}
              img={post.data.image.url}
              imgAlt={post.data.image.alt}
              href={'/blog/' + post.slug + '/'}
              date={post.data.date.toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
              })}
              author={post.authors[0]}
            />
          ))}
      </div>
      <BbBracket className='scale-x-[-1.5] scale-y-150 md:scale-x-[-1.1] md:scale-y-[1.1] text-bb-grey-200 absolute w-56 md:w-72 top-72 md:top-24 -left-16' />
    </>
  )
}

export default NewsSection
