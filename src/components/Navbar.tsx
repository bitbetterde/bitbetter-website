import type React from 'react'
import { useState } from 'react'
import { ReactComponent as BbLogo } from '@assets/bb_logo_black.svg'
import { LinkButton } from '@components'
import { ReactComponent as ListIcon } from '@phosphor-icons/core/regular/list.svg'
import { ReactComponent as XIcon } from '@phosphor-icons/core/bold/x-bold.svg'

interface Props {
  buttonCaption: string
}

const Navbar: React.FC<Props> = ({ buttonCaption }) => {
  const [navListOpen, setNavListOpen] = useState(false)

  const openMenu = () => {
    setNavListOpen(true)
    document.documentElement.style.overflowY = 'hidden'
  }

  const closeMenu = () => {
    setNavListOpen(false)
    document.documentElement.style.overflowY = 'auto'
  }

  return (
    <div
      className={
        '2xl:grid grid-cols-[1fr_min(140ch,calc(100%-64px))_1fr] gap-8 grid-wrapper fixed top-0 bg-white w-full z-20'
      }
    >
      <nav
        className={`${
          navListOpen ? 'h-screen' : 'h-16'
        } flex flex-col lg:flex-row lg:h-20 justify-between lg:items-center lg:pl-24 lg:pr-28`}
      >
        <div className={'flex flex-row justify-between items-center h-16 pl-5'}>
          <a href={'/'}>
            <BbLogo className={'h-8'} />
          </a>

          {!navListOpen && (
            <ListIcon
              className={'w-8 h-8 mr-4 lg:hidden'}
              onClick={() => {
                openMenu()
              }}
            />
          )}
          {navListOpen && (
            <XIcon
              className={'w-6 h-6 mr-4 lg:hidden'}
              onClick={() => {
                closeMenu()
              }}
            />
          )}
        </div>

        <ul
          className={`${
            navListOpen ? 'flex' : 'hidden'
          } lg:flex gap-4 lg:gap-8 ml-5 lg:ml-0 flex-col lg:flex-row font-grotesk lg:font-sans text-bb-4xl lg:text-base`}
        >
          <li className={'lg:flex lg:items-center'}>
            <a
              href={'/#services'}
              onClick={() => {
                closeMenu()
              }}
            >
              Leistung
            </a>
          </li>
          <li className={'lg:flex lg:items-center'}>
            <a href={'blog'}>Blog</a>
          </li>
          <li className={'lg:flex lg:items-center'}>
            <a
              href={'/#aboutus'}
              onClick={() => {
                closeMenu()
              }}
            >
              Über uns
            </a>
          </li>
          <li className={'ml-4 hidden lg:block'}>
            <LinkButton
              className={'h-9'}
              caption={buttonCaption}
              dark={true}
              href={'mailto:info@bitbetter.de'}
            />
          </li>
        </ul>

        {navListOpen && (
          <div className={'lg:hidden px-5 mb-10'}>
            <LinkButton
              className={'h-12 w-full justify-center'}
              caption={buttonCaption}
              dark={true}
              href={'mailto:info@bitbetter.de'}
            />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
