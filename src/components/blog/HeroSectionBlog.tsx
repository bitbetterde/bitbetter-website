import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { ReactComponent as BbBracket } from '@assets/bb_bracket_border.svg'
import { LinkButton } from '@components'

interface Props {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSectionBlog: React.FC<Props> = ({ title, subtitle, buttonCaption }: Props) => {
  return (
    <header className='relative lg:pt-0 flex flex-col justify-between items-start lg:flex-row overflow-hidden lg:overflow-visible'>
      <div className='lg:flex-1 lg:basis-1/2 flex flex-col items-start px-5 pt-8 pb-24 lg:pl-24 lg:pr-44 lg:pt-28 lg:pb-32 bg-bb-grey-200'>
        <BbBracket className='text-white rotate-[160deg] absolute w-72 -top-24 lg:top-8 -right-16' />
        <BbBracket className='text-white -rotate-[20deg] absolute w-72 top-8 -left-20 lg:top-0 ' />
        <div className={'z-10'}>
          <h1 className='text-black font-grotesk font-xl text-[6rem] lg:text-[10rem] mt-7 leading-tight'>
            blog
          </h1>
          {subtitle && (
            <p className='font-grotesk text-base lg:text-lg mt-6 text-bb-grey-500'>{subtitle}</p>
          )}
        </div>
      </div>
      {/*<div className='relative lg:flex-1 lg:basis-1/2 lg:pt-28 -pb-10 w-full overflow-visible bg-bb-grey-200'>*/}
      {/*  <div className={'lg:absolute h-[64vw] lg:h-[38rem] w-full overflow-hidden'}>*/}
      {/*    <picture>*/}
      {/*      <source srcSet='/images/team.webp' type='image/webp' />*/}
      {/*      <source srcSet='/images/team.jpg' type='image/jpeg' />*/}
      {/*      <img*/}
      {/*        src='/images/team.jpg'*/}
      {/*        alt={'Die zwei bitbetter-Geschäftsführer vor einem Fluss und Bäumen'}*/}
      {/*        width={671}*/}
      {/*        height={736}*/}
      {/*        className='relative lg:top-0 -top-[18vw] w-full lg:w-auto lg:h-full object-cover'*/}
      {/*      />*/}
      {/*    </picture>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  )
}

export default HeroSectionBlog
