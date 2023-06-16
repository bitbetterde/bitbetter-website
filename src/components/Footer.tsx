import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import LinkButton from '@components/LinkButton'
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
          Du möchtest mit uns zusammenarbeiten? Wir freuen uns auf deine E-Mail.
        </h3>
        <LinkButton className='mt-5' caption={'Schreib uns'} href='mailto:info@bitbetter.de' />
        <div
          className={
            'flex flex-col md:flex-row justify-between text-base md:text-lg leading-[1.4] mt-[11.5rem] md:mt-[17.875rem]'
          }
        >
          <address className={'not-italic mt-8 md:mt-0'}>
            <a className='underline' href='mailto:info@bitbetter.de'>
              info@bitbetter.de
            </a>
            <br />
            <br />
            bitbetter GmbH <br />
            Desenißstr. 37 <br />
            22083 Hamburg <br />
            <br />
            Registergericht: <br />
            Amtsgericht Hamburg (HRB1337) <br />
          </address>
          <div className={'not-italic'}>
            <br />
            <br />
            Vertreten durch die Geschäftsführer: <br />
            Moritz Stückler
            <br />
            Fabian Schmidt <br />
            <br />
            UStIdNr: DE358143925 <br />
            © 2023 bitbetter GmbH <br />
          </div>
        </div>
      </div>
      <BbBracket className='text-white scale-90 absolute w-72 -bottom-16 left-0 hidden md:block' />
      <BbBracket className='text-white scale-90 rotate-180 absolute w-72 top-44 left-80 hidden md:block' />
    </footer>
  )
}

export default Footer
