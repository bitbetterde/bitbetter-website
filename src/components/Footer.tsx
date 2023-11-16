import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { LinkButton } from '@components'
import { ReactComponent as BbBracket } from '@assets/bb_bracket.svg'
import { ReactComponent as GithubIcon } from '@assets/github.svg'
import { ReactComponent as LinkedInIcon } from '@assets/linkedin.svg'

interface Props {
  children?: React.ReactNode
}

const Footer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div
        className={
          'flex gap-8 flex-col justify-between md:pt-0.5 z-10 lg:col-start-2 lg:col-span-5 col-span-1'
        }
      >
        <div>
          <BbLogo className={'h-8 md:h-10'} />
        </div>

        <div className='flex flex-col gap-6 items-start'>
          <div className='flex gap-2'>
            <a
              href='https://github.com/bitbetterde/'
              target='_blank'
              className='text-black hover:text-opacity-75'
              aria-label='bitbetter auf GitHub'
            >
              <GithubIcon className='p-2 h-10 w-10' />
            </a>
            <a
              href='https://www.linkedin.com/company/bitbetter/'
              target='_blank'
              className='text-black hover:text-opacity-75'
              aria-label='bitbetter auf LinkedIn'
            >
              <LinkedInIcon className='p-2 h-10 w-10' />
            </a>
          </div>
          {children}
        </div>
      </div>
      <div className={'z-10 col-span-1 lg:col-span-6'}>
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
            Amtsgericht Hamburg (HRB 177719) <br />
          </address>
          <div>
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
      <BbBracket className='text-white scale-90 absolute w-72 -bottom-16 -left-20 hidden md:block' />
      <BbBracket className='text-white scale-90 rotate-180 absolute w-72 top-44 left-60 hidden md:block' />
    </>
  )
}

export default Footer
