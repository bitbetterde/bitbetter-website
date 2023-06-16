import type React from 'react'

interface Props {
  className?: string
}

const ServiceItemDivider: React.FC<Props> = ({ className = '' }) => {
  return <div className={`h-3 ${className}`}></div>
}

export default ServiceItemDivider
