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
    <footer
      className={'flex flex-col md:flex-row pt-12 md:pt-20 px-5 md:px-28 pb-14 gap-y-5 relative'}
    >
      <div className={'flex-[2] flex gap-8 flex-col justify-between md:pt-0.5 z-10'}>
        <div>
          <BbLogo className={'h-8 md:h-10'} />
        </div>
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
          {children}
        </div>
      </div>
      <BbBracket className='text-white scale-90 absolute w-72 -bottom-16 left-0 hidden md:block' />
      <BbBracket className='text-white scale-90 rotate-180 absolute w-72 top-44 left-80 hidden md:block' />
    </footer>
  )
}

export default Footer
