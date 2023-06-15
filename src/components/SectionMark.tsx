import type React from 'react'

const SectionMark: React.FC<{ title: string; classNameText?: string; classNameLine?: string }> = ({
  title,
  classNameText = '',
  classNameLine = '',
}) => {
  return (
    <div className={'flex items-center gap-5'}>
      <h2 className={`text-base lg:text-lg uppercase tracking-widest ${classNameText}`}>{title}</h2>{' '}
      <span className={`w-16 h-0.5 ${classNameLine} hidden lg:inline`}></span>
    </div>
  )
}

export default SectionMark
