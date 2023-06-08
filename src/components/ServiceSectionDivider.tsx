import type React from 'react'
import SectionMark from '@components/SectionMark'
import DarkServiceSection from '@components/DarkSeviceSection'
import LightServiceSection from '@components/LightSeviceSection'

interface Props {
  className?: string
}

const ServiceSectionDivider: React.FC<Props> = ({ className = '' }) => {
  return <div className={`h-3 ${className}`}></div>
}

export default ServiceSectionDivider
