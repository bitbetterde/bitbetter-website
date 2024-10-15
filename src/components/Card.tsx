import type { CollectionEntry } from 'astro:content'
import { ConditionalWrapper } from './ConditionalWrapper'
import LinkButton from './LinkButton'
import AuthorsByline from './AuthorsByline'

interface Props {
  img?: string
  imgAlt?: string
  title: string
  subtitle: string
  href?: string
  teaser?: string
  className?: string
  showButton?: boolean
  date?: string
  author?: CollectionEntry<'authors'>
}

const Card: React.FC<Props> = ({
  img,
  imgAlt,
  title,
  subtitle,
  teaser,
  href,
  className,
  showButton,
  date,
  author,
}: Props) => {
  return (
    <ConditionalWrapper
      condition={!showButton}
      wrapper={(children) => (
        <a href={href} className={`flex-1 flex flex-col gap-3 group ${className || ''}`}>
          {children}
        </a>
      )}
      falseWrapper={(children) => (
        <div className={`flex-1 flex flex-col gap-3 group ${className || ''}`}>{children}</div>
      )}
    >
      <>
        {img && (
          <img
            className='w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
            src={img}
            alt={imgAlt}
          />
        )}
        {subtitle && (
          <h3
            className={`font-sans text-lg leading-5 tracking-widest uppercase font-normal text-black opacity-70 ${
              img ? 'pt-4' : ''
            } line-clamp-1`}
            title={subtitle}
          >
            {subtitle}
          </h3>
        )}
        {title && (
          <h2 className='font-grotesk font-medium text-2xl leading-8 line-clamp-2'>{title}</h2>
        )}
        {teaser && <p className='pt-4 text-lg leading-6 text-black/75'>{teaser}</p>}
        {(date || author) && (
          <div className='flex gap-2 items-center font-medium'>
            {date && <p className='text-lg font-normal text-black/50'>{date}</p>}
            {author && (
              <>
                {'·'}
                <AuthorsByline authors={[author]} inline />
              </>
            )}
          </div>
        )}

        {href && showButton && (
          <LinkButton small caption={'Weiterlesen'} variant='dark' href={href} className='mt-2' />
        )}
      </>
    </ConditionalWrapper>
  )
}

export default Card
