import type React from 'react'
import { useState } from 'react'
import BbLogo from '@assets/bb_logo_black.svg?react'
import { LinkButton, SectionGridContainer } from '@components'
import ListIcon from '@phosphor-icons/core/regular/list.svg?react'
import XIcon from '@phosphor-icons/core/bold/x-bold.svg?react'

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
    <SectionGridContainer className='fixed top-0 bg-white w-full z-20 border border-b-bb-grey-200'>
      <div
        className={`${
          navListOpen ? 'flex-col h-dvh' : 'flex-row'
        } flex justify-between lg:items-center lg:col-start-2 col-span-1 lg:col-span-11`}
      >
        <nav
          className={`flex ${
            navListOpen ? 'flex-col h-full' : 'flex-row'
          } w-full justify-between items-start lg:items-center px-5 lg:px-0`}
        >
          <div className='flex justify-between items-center w-full h-20'>
            <a href={'/'}>
              <BbLogo className={'h-8'} />
            </a>

            {navListOpen ? (
              <XIcon
                className={'w-6 h-6 lg:hidden'}
                onClick={() => {
                  closeMenu()
                }}
              />
            ) : (
              <ListIcon
                className={'w-8 h-8 lg:hidden'}
                onClick={() => {
                  openMenu()
                }}
              />
            )}
          </div>

          <ul
            className={`${
              navListOpen ? 'flex flex-1' : 'hidden lg:flex'
            } gap-4 lg:gap-8 ml-5 lg:ml-0 flex-col lg:flex-row font-grotesk lg:font-sans text-bb-4xl lg:text-base justify-center !font-normal`}
          >
            <MenuItem
              href='/#aboutus'
              onClick={() => {
                closeMenu()
              }}
            >
              Über uns
            </MenuItem>
            <MenuItem
              href='/#services'
              onClick={() => {
                closeMenu()
              }}
            >
              Leistungen
            </MenuItem>

            <MenuItem href='/blog'>Blog</MenuItem>

            <li className={'ml-4 hidden lg:block shrink-0'}>
              <LinkButton
                className={'h-9'}
                caption={buttonCaption}
                variant='dark'
                href={'mailto:info@bitbetter.de'}
              />
            </li>
          </ul>
        </nav>

        {navListOpen && (
          <div className={'lg:hidden px-5 mb-10'}>
            <LinkButton
              className={'w-full justify-center'}
              small
              caption={buttonCaption}
              variant='dark'
              href={'mailto:info@bitbetter.de'}
            />
          </div>
        )}
      </div>
    </SectionGridContainer>
  )
}

export default Navbar

interface MenuItemProps {
  onClick?: (e: any) => void
  href: string
  className?: string
  children: React.ReactNode
}
const MenuItem = ({ onClick, children, href, className }: MenuItemProps) => {
  return (
    <li className={`lg:flex lg:items-center shrink-0 opacity-75 ${className || ''}`}>
      <a href={href} {...(onClick ? { onClick } : {})}>
        {children}
      </a>
    </li>
  )
}
