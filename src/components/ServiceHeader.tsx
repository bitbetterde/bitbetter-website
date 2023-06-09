import type React from 'react'

interface Props {
  title: string
  text: string
  dark?: boolean
}

const ServiceHeader: React.FC<Props> = ({ title, text, dark = false }) => {
  return (
    <div
      className={`${dark ? 'bg-black text-white' : 'bg-bb-grey-200 text-black'} px-8 pt-8 pb-10`}
    >
      <div className={'text-base md:text-xl'}>{title}</div>
      <h3 className={'text-2xl md:text-bb-3xl font-grotesk mt-[5.5rem]'}>{text}</h3>
    </div>
  )
}

export default ServiceHeader
