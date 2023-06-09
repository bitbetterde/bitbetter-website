import type React from 'react'

interface Props {
  title: string
  text: string
  dark?: boolean
}

const ServiceSection: React.FC<Props> = ({ title, text, dark = false }) => {
  return (
    <div className={`p-8 ${dark ? 'bg-bb-grey-600' : 'bg-bb-grey-400'}`}>
      <div className={'bg-white w-16 h-16 rounded-full'}></div>
      <h5 className={`text-xl mt-4 ${dark ? 'text-bb-grey-400' : 'text-black'}`}>{title}</h5>
      <p className={`opacity-75 mt-2 ${dark && 'text-white'}`}>{text}</p>
    </div>
  )
}

export default ServiceSection
