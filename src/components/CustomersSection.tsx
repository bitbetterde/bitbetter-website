import { SectionMark } from '@components'

interface CustomersSectionProps {
  customers?: Array<{ name: string; logo: string; href: string }>
}

const CustomersSection: React.FC<CustomersSectionProps> = ({ customers }) => {
  const linkClasses = 'block flex items-center justify-center p-4 customer-logo'
  const logoClasses = '[&_svg]:max-h-16 [&_svg]:w-full [&_svg]:fill-slate-800'
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
        {customers?.map((customer, i) => {
          return (
            <a
              key={`customer-${i}`}
              href={customer.href}
              target='_blank'
              aria-label={customer.name}
              className={linkClasses}
            >
              <div className={logoClasses} dangerouslySetInnerHTML={{ __html: customer.logo }} />
            </a>
          )
        })}
      </div>
    </>
  )
}

export default CustomersSection
