import type React from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { LinkButton } from '@components'

interface Props {
  buttonCaption: string
}

const Navbar: React.FC<Props> = ({ buttonCaption }) => {
  return (
    <nav className={'relative flex flex-row h-20 justify-between items-center pl-24 pr-28'}>
      <BbLogo className={'h-8'} />

      <ul className={'flex gap-8'}>
        <li className={'flex items-center'}>
          <a href={'/#services'}>Leistung</a>
        </li>
        <li className={'flex items-center'}>
          <a href={'blog'}>Blog</a>
        </li>
        <li className={'flex items-center'}>
          <a href={'/#aboutus'}>Über uns</a>
        </li>
        <li className={'ml-4'}>
          <LinkButton
            className={'h-9'}
            caption={buttonCaption}
            dark={true}
            href={'mailto:info@bitbetter.de'}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
