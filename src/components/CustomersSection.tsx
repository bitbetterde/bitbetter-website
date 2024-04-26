import { SectionMark } from '@components'
import HsuLogo from '@assets/customers/hsu.svg?react'
import HiwwLogo from '@assets/customers/hiww.svg?react'
import FchhLogo from '@assets/customers/fchh.svg?react'
import OwLogo from '@assets/customers/ow.svg?react'
import SchleyLogo from '@assets/customers/schley.svg?react'

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
      <div className='xl:col-span-8 grid grid-cols-5 py-16'>
        <a href='bla.com' target='_blank' className={linkClasses}>
          <HsuLogo className={logoClasses} />
        </a>
        <a href='bla.com' target='_blank' className={linkClasses}>
          <HiwwLogo className={logoClasses} />
        </a>
        <a href='bla.com' target='_blank' className={linkClasses}>
          <FchhLogo className={logoClasses} />
        </a>
        <a href='bla.com' target='_blank' className={linkClasses}>
          <OwLogo className={logoClasses} />
        </a>
        <a href='bla.com' target='_blank' className={linkClasses}>
          <SchleyLogo className={logoClasses} />
        </a>
      </div>
    </>
  )
}

export default CustomersSection
