import type { CollectionEntry } from 'astro:content'
import MastodonIcon from '@phosphor-icons/core/regular/mastodon-logo.svg?react'
import Avatar from './Avatar'
import { fediverseProfileUrl } from '../util/fediverse'

interface AuthorsBylineProps {
  authors: CollectionEntry<'authors'>[]
  inline?: boolean
  light?: boolean
}

const AuthorsByline: React.FC<AuthorsBylineProps> = ({ authors, inline, light }) => {
  return (
    <p
      className={`text-lg ${
        inline ? `font-normal ${light ? 'text-white/50' : 'text-black/50'}` : 'font-medium pt-4'
      }`}
    >
      {inline ? 'v' : 'V'}on{' '}
      {authors.slice(0, 2).map((author, index) => {
        const { firstName, lastName, image, fediverse } = author.data
        // Inline bylines sit inside a card link, and links must not be nested
        const profileUrl = !inline && fediverse ? fediverseProfileUrl(fediverse) : undefined
        return (
          <span key={author.id}>
            {index > 0 && ' & '}
            <Avatar image={image.src} alt='' small /> {firstName + ' ' + lastName}
            {profileUrl && (
              <a
                href={profileUrl}
                target='_blank'
                rel='author noopener'
                title={`${firstName} im Fediverse: ${fediverse}`}
                aria-label={`${firstName} im Fediverse`}
                className='ml-1.5 inline-block align-middle pb-1 text-black/40 hover:text-black transition-colors'
              >
                <MastodonIcon className='w-5 h-5' aria-hidden='true' />
              </a>
            )}
          </span>
        )
      })}
    </p>
  )
}

export default AuthorsByline
