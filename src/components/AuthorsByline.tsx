import type { CollectionEntry } from 'astro:content'
import Avatar from './Avatar'

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
      <Avatar image={authors[0]?.data.image.src} alt={authors[0]?.data.image.alt} small />{' '}
      {authors[0].data.firstName + ' ' + authors[0].data.lastName}
      {authors.length > 1 && (
        <>
          {' '}
          &
          <Avatar image={authors[1]?.data.image.src} alt={authors[1]?.data.image.alt} small />{' '}
          {authors[1].data.firstName + ' ' + authors[1].data.lastName}
        </>
      )}
    </p>
  )
}

export default AuthorsByline
