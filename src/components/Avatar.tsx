interface AvatarProps {
  jpgSrc: string
  webpSrc?: string
  alt: string
  small?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ jpgSrc, webpSrc, alt, small }) => {
  return (
    <picture className={`${small ? 'inline-block my-0 pb-1 align-middle' : ''}`}>
      <source srcSet={webpSrc} type='image/webp' />
      <source srcSet={jpgSrc} type='image/jpeg' />
      <img
        src={jpgSrc}
        alt={alt}
        width={80}
        height={80}
        className={`rounded-full grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all ease-in-out duration-300 ${
          small ? 'w-6 h-6' : 'w-20 h-20'
        }`}
      />
    </picture>
  )
}

export default Avatar
