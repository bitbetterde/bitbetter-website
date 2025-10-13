import BbBracket from '@assets/bb_bracket_border.svg?react'
import { LinkButton } from '@components'

interface HeroSectionProps {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonCaption }) => {
  return (
    <>
      <div className='flex flex-col items-start pt-74.5 pb-24 lg:py-32 bg-bb-grey-200 px-5 lg:px-0 col-span-1 lg:col-span-5 lg:col-start-2'>
        <h1 className='text-black font-grotesk font-medium text-[1.75rem] lg:text-5xl/tight mt-7'>
          {title}
        </h1>
        {subtitle && <p className='text-base lg:text-xl mt-6 text-bb-grey-500'>{subtitle}</p>}
        {buttonCaption && (
          <LinkButton
            className='mt-8'
            caption={buttonCaption}
            variant='dark'
            href={'mailto:info@bitbetter.de'}
          />
        )}
      </div>
      <div className='relative lg:pt-24 w-full overflow-visible bg-bb-grey-200 col-span-1 lg:col-start-8 lg:col-span-6'>
        <div className={'lg:absolute h-[64vw] lg:h-168 w-full overflow-hidden'}>
          <picture>
            <source srcSet='/images/team.webp' type='image/webp' />
            <source srcSet='/images/team.jpg' type='image/jpeg' />
            <img
              src='/images/team.jpg'
              alt={
                'Die zwei bitbetter-Geschäftsführer Fabian Schmidt (links) und Moritz Stückler (rechts) vor einem Fluss und Bäumen in Hamburg.'
              }
              width={671}
              height={736}
              className='relative lg:top-0 -top-[18vw] w-full lg:h-full object-cover z-10'
            />
          </picture>
        </div>
      </div>
      <BbBracket className='text-white scale-[140%] absolute w-72 -top-40 lg:top-0 -right-16 z-20' />
      <BbBracket className='text-transparent stroke-black -rotate-10 scale-[140%] absolute w-72 -top-32 lg:top-8 -right-8 stroke-[0.5] z-20' />
    </>
  )
}

export default HeroSection
