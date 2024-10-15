import type React from 'react'

interface SectionMarkProps {
  title: string
  className?: string
  classNameText?: string
  classNameLine?: string
}

const SectionMark: React.FC<SectionMarkProps> = ({
  title,
  className = '',
  classNameText = '',
  classNameLine = '',
}) => {
  return (
    <div className={`flex items-center gap-5 shrink-0 ${className}`}>
      <h2 className={`text-base lg:text-lg uppercase tracking-widest ${classNameText}`}>{title}</h2>{' '}
      <span className={`w-16 h-0.5 ${classNameLine} hidden lg:inline`}></span>
    </div>
  )
}

export default SectionMark
