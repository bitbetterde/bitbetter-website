import type React from 'react'
import SectionMark from '@components/SectionMark'
import ServiceSection from '@components/DarkSeviceSection'
import ServiceSectionDivider from '@components/ServiceSectionDivider'

interface Props {}

const ServicesSection: React.FC<Props> = () => {
  return (
    <section className={'flex p-28'}>
      <div className={'flex-1'}>
        <SectionMark
          title={'Leistungen'}
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'flex-[2.58] grid grid-cols-2 gap-x-6'}>
        <div className={'bg-black text-white px-8 pt-8 pb-10'}>
          <div className={'bg-black text-white text-xl'}>Entwicklung</div>
          <h3 className={'bg-black text-white text-bb-3xl font-grotesk mt-[5.5rem]'}>
            Individuelle Software-Lösungen sind unsere Leidenschaft
          </h3>
        </div>
        <div className={'bg-bb-grey-200 px-8 pt-8 pb-10'}>
          <div className={'text-xl'}>Consulting & Strategie</div>
          <h3 className={'text-bb-3xl font-grotesk mt-[5.5rem] mx-8'}>
            Vertrauen Sie auf unsere langjährige Digital-Kompetenz
          </h3>
        </div>
        <ServiceSection
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
          dark={true}
        />
        <ServiceSection
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
        />
        <ServiceSectionDivider className={'bg-black'} />
        <ServiceSectionDivider className={'bg-bb-grey-200'} />
        <ServiceSection
          title={'Backend'}
          text={
            'Wir konstruieren performante Server-Anwendungen mit Hilfe von APIs, Microservices und Datenbanken.'
          }
          dark={true}
        />
        <ServiceSection
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
        />
        <ServiceSectionDivider className={'bg-black'} />
        <ServiceSectionDivider className={'bg-bb-grey-200'} />
        <ServiceSection
          title={'Frontend'}
          text={
            'Wir implementieren hochwertige und interaktive Frontends mit Hilfe modernster Web-Technologien.'
          }
          dark={true}
        />
        <ServiceSection
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
        />
        <div className={'h-8 bg-black'} />
        <div className={'h-8 bg-bb-grey-200'} />
      </div>
    </section>
  )
}

export default ServicesSection
