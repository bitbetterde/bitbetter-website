import type React from 'react'

const SectionGridContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`md:grid grid-cols-[1fr_min(140ch,calc(100%-64px))_1fr] gap-8 grid-wrapper ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  )
}
export default SectionGridContainer
