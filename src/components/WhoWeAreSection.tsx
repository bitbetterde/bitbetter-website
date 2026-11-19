import type React from 'react'
import type { CollectionEntry } from 'astro:content'
import { Avatar, SectionMark } from '@components'
import FediverseLink from './FediverseLink'
import BbBracket from '@assets/bb_bracket.svg?react'

interface WhoWeAreSectionProps {
  // Shown in two columns, in the given order
  authors: CollectionEntry<'authors'>[]
}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ authors }) => {
  return (
    <>
      <div id={'whoweare'} className={'text-black lg:col-span-3 lg:col-start-2'}>
        <SectionMark
          title={'Das sind wir'}
          className='mb-4 lg:mb-0'
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'text-bb-grey-500 flex-[2.58] mt-6 md:mt-0 col-span-7 z-20'}>
        <div className={'grid grid-cols-1 sm:grid-cols-7 gap-8'}>
          {authors.map((author, index) => {
            const { firstName, lastName, image, description, fediverse } = author.data
            return (
              <div
                key={author.id}
                className={
                  index % 2 === 1
                    ? 'col-span-1 sm:col-span-3 sm:col-start-5'
                    : 'col-span-1 sm:col-span-3'
                }
              >
                <Avatar image={image.src} alt={image.alt} />
                <p className={'mt-5 text-base md:text-xl'}>
                  <b>{firstName + ' ' + lastName}</b>
                  <FediverseLink handle={fediverse} name={firstName} /> {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <BbBracket className='text-bb-grey-200 absolute w-56 md:w-72 -bottom-40 md:-bottom-16 md:left-0 -left-12 z-10' />
    </>
  )
}

export default WhoWeAreSection
