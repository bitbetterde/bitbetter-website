import type { ElementType } from 'react'
import type React from 'react'

interface SectionGridContainerProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  breakpoint?: 'lg' | 'xl' | '2xl'
  as?: ElementType
}

const SectionGridContainer: React.FC<SectionGridContainerProps> = ({
  children,
  className,
  innerClassName,
  breakpoint = 'lg',
  as: Tag = 'section',
}) => {
  const innerGridBreakpointClasses = {
    lg: 'lg:grid-cols-inner lg:gap-4',
    xl: 'xl:grid-cols-inner xl:gap-4',
    '2xl': '2xl:grid-cols-inner 2xl:gap-4',
  }

  return (
    <div className={`2xl:grid 2xl:grid-cols-outer 2xl:grid-wrapper ${className ?? ''}`}>
      <Tag
        className={`grid grid-cols-1 relative ${innerGridBreakpointClasses[breakpoint] ?? ''} ${
          innerClassName || ''
        }`}
      >
        {children}
      </Tag>
    </div>
  )
}
export default SectionGridContainer
