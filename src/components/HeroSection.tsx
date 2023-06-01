import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import Button from './Button'

interface Props {
  title: string
  subtitle?: string
  buttonCaption?: string
}

const HeroSection = ({ title, subtitle, buttonCaption }: Props) => {
  return (
    <header className='relative pl-24 pr-0 py-48 flex gap-24'>
      <div className='flex flex-col items-start max-w-[35%]'>
        <BbLogo />
        <h1 className='text-black font-grotesk font-medium text-5xl mt-7 leading-tight'>{title}</h1>
        {subtitle && <p className='text-lg mt-6 text-bb-grey-500'>{subtitle}</p>}
        {buttonCaption && <Button className='mt-8' caption={buttonCaption} />}
      </div>
      <div className='absolute max-w-3xl right-0 top-32 h-96'>
        <img src='./team.jpg' className='w-full h-auto' />
      </div>
    </header>
  )
}

export default HeroSection
