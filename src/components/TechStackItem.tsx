interface Props {
  title: string
  link: string
  image: string
  light?: boolean
  openInNewTab?: boolean
}

const TechStackItem: React.FC<Props> = ({ image, title, link, light, openInNewTab }: Props) => (
  <a
    href={link}
    {...(openInNewTab ? { target: '_blank' } : {})}
    className={`flex items-center gap-2 ${light ? 'text-white' : 'text-black'}
  `}
  >
    <div
      className={`w-8 h-8 shrink-0 aspect-square p-1 ${
        light ? 'hover:text-white/50' : 'hover:text-black/80'
      } overflow-hidden flex items-center justify-center [&>*]:h-full [&>*]:w-auto`}
      dangerouslySetInnerHTML={{ __html: image }}
    />
    <div className='font-medium flex-1 text-xl'>{title}</div>
  </a>
)

export default TechStackItem
