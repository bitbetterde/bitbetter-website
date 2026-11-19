import type { CollectionEntry } from 'astro:content'
import Avatar from './Avatar'
import FediverseLink from './FediverseLink'

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
        return (
          <span key={author.id}>
            {index > 0 && ' & '}
            <Avatar image={image.src} alt='' small /> {firstName + ' ' + lastName}
            {/* Inline bylines sit inside a card link, and links must not be nested */}
            {!inline && <FediverseLink handle={fediverse} name={firstName} rel='author noopener' />}
          </span>
        )
      })}
    </p>
  )
}

export default AuthorsByline
