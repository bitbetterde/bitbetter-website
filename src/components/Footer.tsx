import type React from 'react'
import BbLogo from '@assets/bb_logo_black.svg?react'
import { LinkButton } from '@components'
import BbBracket from '@assets/bb_bracket.svg?react'
import GithubIcon from '@assets/icons/github.svg?react'
import LinkedInIcon from '@assets/icons/linkedin.svg?react'
import RssIcon from '@assets/icons/rss.svg?react'

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
            <a
              href='/blog/feed.xml'
              target='_blank'
              className='text-black hover:text-opacity-75'
              aria-label='bitbetter Blog RSS Feed'
            >
              <RssIcon className='p-2 h-10 w-10' />
            </a>
          </div>
          {children}
        </div>
      </div>
      <div className={'z-10 col-span-1 lg:col-span-6'}>
        <h3 className={'text-xl md:text-bb-3xl font-grotesk'}>
          Du möchtest mit uns zusammenarbeiten? Wir freuen uns auf ein Gespräch oder eine E-Mail.
        </h3>
        <div className='flex gap-4 mt-5'>
          <LinkButton
            variant='dark'
            className=''
            caption={'Gespräch buchen'}
            href='https://cal.bitbetter.de/team/bitbetter/projekt-anfrage'
            newTab
          />
          <LinkButton className='' caption={'E-Mail schreiben'} href='mailto:info@bitbetter.de' />
        </div>
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
            Tel.: <a href={'tel:4940 33463362'}>040 33463362</a>
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
