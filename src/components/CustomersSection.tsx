import { SectionMark } from '@components'
import HsuLogo from '@assets/customers/hsu.svg?react'
import HiwwLogo from '@assets/customers/hiww.svg?react'
import FchhLogo from '@assets/customers/fchh.svg?react'
import OwLogo from '@assets/customers/ow.svg?react'
import SchleyLogo from '@assets/customers/schley.svg?react'
import CoshLogo from '@assets/customers/cosh.svg?react'
import CscpLogo from '@assets/customers/cscp.svg?react'

const CustomersSection: React.FC = () => {
  const linkClasses = 'block flex items-center justify-center p-4 customer-logo'
  const logoClasses = 'h-16 w-auto fill-slate-800'
  return (
    <>
      <div
        className={'xl:col-span-3 xl:col-start-2 pt-16 pb-0 xl:py-20 px-5 2xl:px-0'}
        id='customers'
      >
        <SectionMark
          title={'Kunden & Partner'}
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className='xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 py-8 lg:py-16 gap-4 xl:gap-8'>
        <a
          href='https://www.cscp.org/'
          target='_blank'
          aria-label='Collaborating Centre on Sustainable Consumption and Production (CSCP) gGmbH'
          className={linkClasses}
        >
          <CscpLogo className={logoClasses} />
        </a>
        <a
          href='https://cosh.de/'
          target='_blank'
          aria-label='CosH Consulting GmbH'
          className={linkClasses}
        >
          <CoshLogo className={logoClasses} />
        </a>
        <a
          href='https://www.hiww.de/'
          target='_blank'
          aria-label='Hamburger Institut für Wertschöpfungssystematik und Wissensmanagement UG'
          className={linkClasses}
        >
          <HiwwLogo className={logoClasses} />
        </a>
        <a
          href='https://www.ios-schley.de/'
          target='_blank'
          aria-label='IOS Institut für Organisationsentwicklung und Systemberatung Schley & Partner GmbH'
          className={linkClasses}
        >
          <SchleyLogo className={logoClasses} />
        </a>
        <a
          href='https://www.hsu-hh.de/'
          target='_blank'
          aria-label='Helmut-Schmidt-Universität/Universität der Bundeswehr Hamburg'
          className={linkClasses}
        >
          <HsuLogo className={logoClasses} />
        </a>
        <a
          href='https://www.fabcity.hamburg/'
          target='_blank'
          aria-label='Fab City Hamburg e.V.'
          className={linkClasses}
        >
          <FchhLogo className={logoClasses} />
        </a>
        <a
          href='https://www.owlaw.de/'
          target='_blank'
          aria-label='O&W Rechtsanwaltsgesellschaft mbH'
          className={linkClasses}
        >
          <OwLogo className={logoClasses} />
        </a>
      </div>
    </>
  )
}

export default CustomersSection
