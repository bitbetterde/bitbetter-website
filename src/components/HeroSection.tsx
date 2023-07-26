import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { ReactComponent as BbBracket } from '@assets/bb_bracket_border.svg'
import { LinkButton } from '@components'

interface Props {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSection: React.FC<Props> = ({ title, subtitle, buttonCaption }: Props) => {
  return (
    <header className='relative  lg:pt-0 flex flex-col justify-between items-start lg:flex-row overflow-hidden lg:overflow-visible'>
      <div className='lg:flex-1 lg:basis-1/2 flex flex-col items-start px-5 pt-[18.625rem] pb-24 lg:pl-24 lg:pr-44 lg:pt-48 lg:pb-32 bg-bb-grey-200'>
        <BbLogo className={'h-6 lg:h-10'} />
        <h1 className='text-black font-grotesk font-medium text-[1.75rem] lg:text-5xl mt-7 leading-tight'>
          {title}
        </h1>
        {subtitle && <p className='text-base lg:text-lg mt-6 text-bb-grey-500'>{subtitle}</p>}
        {buttonCaption && (
          <LinkButton
            className='mt-8'
            caption={buttonCaption}
            dark={true}
            href={'mailto:info@bitbetter.de'}
          />
        )}
      </div>
      <div className='relative lg:flex-1 lg:basis-1/2 lg:pt-48 -pb-10 w-full overflow-visible bg-bb-grey-200'>
        <div className={'lg:absolute h-[64vw] lg:h-[46rem] w-full overflow-hidden'}>
          <picture>
            <source srcSet='/team.webp' type='image/webp' />
            <source srcSet='/team.jpg' type='image/jpeg' />
            <img
              src='/team.jpg'
              alt={'Die zwei bitbetter-Geschäftsführer vor einem Fluss und Bäumen'}
              width={671}
              height={736}
              className='relative lg:top-0 -top-[18vw] w-full lg:w-auto lg:h-full object-cover'
            />
          </picture>
        </div>
      </div>
      <BbBracket className='text-white scale-[140%] absolute w-72 -top-40 lg:top-0 -right-16' />
      <BbBracket className='text-transparent stroke-black -rotate-[10deg] scale-[140%] absolute w-72 -top-32 lg:top-8 -right-8 stroke-[0.5]' />
    </header>
  )
}

export default HeroSection
