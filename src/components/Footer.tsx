import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import Button from '@components/Button'

const Footer: React.FC = () => {
  return (
    <footer className={'flex flex-col md:flex-row pt-14 md:pt-20 px-5 md:px-28 pb-14'}>
      <div className={'flex-[2] pt-0.5'}>
        <BbLogo />
      </div>
      <div className={'flex-[3]'}>
        <h3 className={'text-xl md:text-bb-3xl font-grotesk'}>
          Ihr möchtet mit uns zusammenarbeiten? Wir freuen uns von euch zu hören.
        </h3>
        <Button className='mt-5' caption={'Projekt anfragen'} />
        <div
          className={
            'flex flex-col md:flex-row justify-between text-base md:text-lg leading-[1.4] mt-[17.875rem]'
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
    </footer>
  )
}

export default Footer
