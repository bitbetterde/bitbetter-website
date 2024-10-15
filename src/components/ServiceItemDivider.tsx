import type React from 'react'

interface ServiceItemDividerProps {
  className?: string
}

const ServiceItemDivider: React.FC<ServiceItemDividerProps> = ({ className = '' }) => {
  return <div className={`h-3 ${className}`}></div>
}

export default ServiceItemDivider
