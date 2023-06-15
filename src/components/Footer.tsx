import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import Button from '@components/Button'
import { ReactComponent as BbBracket } from '@assets/bb_bracket.svg'

const Footer: React.FC = () => {
  return (
    <footer
      className={'flex flex-col md:flex-row pt-12 md:pt-20 px-5 md:px-28 pb-14 gap-y-5 relative'}
    >
      <div className={'flex-[2] md:pt-0.5'}>
        <BbLogo className={'h-6 md:h-10'} />
      </div>
      <div className={'flex-[3] z-10'}>
        <h3 className={'text-xl md:text-bb-3xl font-grotesk'}>
          Ihr möchtet mit uns zusammenarbeiten? Wir freuen uns von euch zu hören.
        </h3>
        <Button className='mt-5' caption={'Projekt anfragen'} />
        <div
          className={
            'flex flex-col md:flex-row justify-between text-base md:text-lg leading-[1.4] mt-[11.5rem] md:mt-[17.875rem]'
          }
        >
          <address className={'not-italic'}>
            info@bitbetter.de <br />
            Vertreten durch die Geschäftsführer: <br />
            Moritz Stückler, Fabian Schmidt <br />
            UStIdNr: ABC123 <br />
            © 2023 bitbetter GmbH <br />
          </address>
          <address className={'not-italic mt-8 md:mt-0'}>
            bitbetter GmbH <br />
            Desenißstr. 37 <br />
            22083 Hamburg <br />
            Registergericht: <br />
            Amtsgericht Hamburg (HRB1337) <br />
          </address>
        </div>
      </div>
      <BbBracket className='text-white scale-90 absolute w-72 -bottom-16 left-0 hidden md:block' />
      <BbBracket className='text-white scale-90 rotate-180 absolute w-72 top-44 left-80 hidden md:block' />
    </footer>
  )
}

export default Footer
