import LinkButton from './LinkButton'

interface Props {
  img?: string
  imgAlt?: string
  title: string
  subtitle: string
  href?: string
  teaser?: string
  className?: string
}

const Card: React.FC<Props> = ({
  img,
  imgAlt,
  title,
  subtitle,
  teaser,
  href,
  className,
}: Props) => {
  return (
    <div className={`flex-1 flex flex-col ${className || ''}`}>
      {img && <img className='w-full h-64 object-cover' src={img} alt={imgAlt} />}
      {subtitle && (
        <h3
          className={`font-sans text-lg leading-5 tracking-widest uppercase font-normal text-black opacity-70 ${
            img ? 'pt-8' : ''
          } line-clamp-1`}
        >
          {subtitle}
        </h3>
      )}
      {title && (
        <h2 className='font-grotesk font-medium text-2xl leading-8 mt-3 line-clamp-2 h-16'>
          {title}
        </h2>
      )}
      {teaser && <p>{teaser}</p>}
      {href && <LinkButton small caption={'Weiterlesen'} dark href={href} className='mt-5' />}
    </div>
  )
}

export default Card
