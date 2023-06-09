import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import Button from '@components/Button'
import { ReactComponent as BbBracket } from '@assets/bb_bracket.svg'

const Footer: React.FC = () => {
  return (
    <footer className={'flex pt-20 px-28 pb-14 relative'}>
      <div className={'flex-[2] pt-0.5'}>
        <BbLogo />
      </div>
      <div className={'flex-[3]'}>
        <h3 className={'text-bb-3xl font-grotesk'}>
          Ihr möchtet mit uns zusammenarbeiten? Wir freuen uns von euch zu hören.
        </h3>
        <Button className='mt-5' caption={'Projekt anfragen'} />
        <div className={'flex justify-between text-lg leading-[1.4] mt-[17.875rem]'}>
          <address className={'not-italic'}>
            info@bitbetter.de <br />
            Vertreten durch die Geschäftsführer: <br />
            Moritz Stückler, Fabian Schmidt <br />
            UStIdNr: ABC123 <br />
            © 2023 bitbetter GmbH <br />
          </address>
          <address className={'not-italic'}>
            bitbetter GmbH <br />
            Desenißstr. 37 <br />
            22083 Hamburg <br />
            Registergericht: <br />
            Amtsgericht Hamburg (HRB1337) <br />
          </address>
        </div>
      </div>
      <BbBracket className='text-white scale-90 absolute w-72 -bottom-16 left-0' />
      <BbBracket className='text-white scale-90 rotate-180 absolute w-72 top-44 left-80' />
    </footer>
  )
}

export default Footer
