import type React from 'react'

interface Props {
  title: string
  text: string
}

const DarkServiceSection: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={'p-8 bg-bb-grey-600'}>
      <div className={'bg-white w-16 h-16 rounded-full'}></div>
      <h5 className={'text-xl text-bb-grey-400 mt-4'}>{title}</h5>
      <p className={'opacity-75 text-white mt-2'}>{text}</p>
    </div>
  )
}

export default DarkServiceSection
