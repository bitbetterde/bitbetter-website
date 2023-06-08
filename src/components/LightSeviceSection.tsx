import type React from 'react'

interface Props {
  title: string
  text: string
}

const LightServiceSection: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={'p-8 bg-bb-grey-400'}>
      <div className={'bg-white w-16 h-16 rounded-full'}></div>
      <h5 className={'text-xl text-black mt-4'}>{title}</h5>
      <p className={'opacity-75 mt-2'}>{text}</p>
    </div>
  )
}

export default LightServiceSection
