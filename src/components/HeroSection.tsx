import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { ReactComponent as BbBracket } from '@assets/bb_bracket_border.svg'
import Button from './Button'

interface Props {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSection = ({ title, subtitle, buttonCaption }: Props) => {
  return (
    <header className='relative  lg:pt-0 flex flex-col justify-between items-start lg:flex-row overflow-hidden lg:overflow-visible'>
      <div className='lg:flex-1 lg:basis-1/2 flex flex-col items-start px-5 pt-[18.625rem] pb-24 lg:pl-24 lg:pr-44 lg:pt-48 lg:pb-32 bg-bb-grey-200'>
        <BbLogo className={'h-6 lg:h-10'} />
        <h1 className='text-black font-grotesk font-medium text-[1.75rem] lg:text-5xl mt-7 leading-tight'>
          {title}
        </h1>
        {subtitle && <p className='text-base lg:text-lg mt-6 text-bb-grey-500'>{subtitle}</p>}
        {buttonCaption && <Button className='mt-8' caption={buttonCaption} dark={true} />}
      </div>
      <div className='relative lg:flex-1 lg:basis-1/2 lg:pt-48 -pb-10 w-full overflow-visible bg-bb-grey-200'>
        <img src='/team.jpg' className='lg:absolute lg:h-[46rem] h-auto w-full lg:object-cover' />
      </div>
      <BbBracket className='text-white scale-[140%] absolute w-72 -top-40 lg:top-0 -right-16' />
      <BbBracket className='text-transparent stroke-black -rotate-[10deg] scale-[140%] absolute w-72 -top-32 lg:top-8 -right-8 stroke-[0.5]' />
    </header>
  )
}

export default HeroSection
