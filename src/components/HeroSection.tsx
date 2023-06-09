import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import Button from './Button'

interface Props {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSection = ({ title, subtitle, buttonCaption }: Props) => {
  return (
    <header className='relative md:pl-24 md:pr-0 pt-[18.625rem] md:py-48 flex flex-col md:flex-row gap-24'>
      <div className='flex flex-col items-start md:max-w-[35%] px-5 md:px-0'>
        <BbLogo className={'h-6 md:h-10'} />
        <h1 className='text-black font-grotesk font-medium text-[1.75rem] md:text-5xl mt-7 leading-tight'>
          {title}
        </h1>
        {subtitle && <p className='text-base md:text-lg mt-6 text-bb-grey-500'>{subtitle}</p>}
        {buttonCaption && <Button className='mt-8' caption={buttonCaption} dark={true} />}
      </div>
      <div className='md:absolute md:max-w-3xl md:right-0 md:top-32 md:h-96'>
        <img src='./team.jpg' className='w-full h-auto' />
      </div>
    </header>
  )
}

export default HeroSection
