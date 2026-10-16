import type { ImageMetadata } from 'astro'

interface AvatarProps {
  image: ImageMetadata
  alt: string
  small?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ image, alt, small }) => {
  return (
    <picture className={`${small ? 'inline-block my-0 pb-1 align-middle' : ''}`}>
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading='lazy'
        decoding='async'
        className={`rounded-full grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all ease-in-out duration-300 ${
          small ? 'w-6 h-6' : 'w-20 h-20'
        }`}
      />
    </picture>
  )
}

export default Avatar
