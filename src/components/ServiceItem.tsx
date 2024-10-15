import type React from 'react'

interface ServiceItemProps {
  title: string
  text: string
  dark?: boolean
  icon?: React.ReactNode
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, text, icon, dark = false }) => {
  return (
    <div className={`p-8 ${dark ? 'bg-bb-grey-600' : 'bg-bb-grey-400'}`}>
      {icon && (
        <div
          className={`${
            dark ? 'bg-bb-grey-550 text-bb-grey-400' : 'bg-bb-grey-200 text-black'
          } w-16 h-16 p-4 rounded-full`}
        >
          {icon}
        </div>
      )}
      <h4
        className={`text-base md:text-xl font-medium mt-4 ${
          dark ? 'text-bb-grey-400' : 'text-black'
        }`}
      >
        {title}
      </h4>
      <p className={`text-base font-normal md:text-xl opacity-75 mt-2 ${dark ? 'text-white' : ''}`}>
        {text}
      </p>
    </div>
  )
}

export default ServiceItem
