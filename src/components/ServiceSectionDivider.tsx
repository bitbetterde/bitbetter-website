import type React from 'react'

interface Props {
  className?: string
}

const ServiceSectionDivider: React.FC<Props> = ({ className = '' }) => {
  return <div className={`h-3 ${className}`}></div>
}

export default ServiceSectionDivider
