import type React from 'react'
import SectionMark from '@components/SectionMark'
import ServiceItem from '@components/ServiceItem'
import ServiceItemDivider from '@components/ServiceItemDivider'
import { ReactComponent as GlobeIcon } from '@phosphor-icons/core/regular/globe.svg'
import { ReactComponent as LightningIcon } from '@phosphor-icons/core/regular/lightning.svg'
import { ReactComponent as TerminalWindowIcon } from '@phosphor-icons/core/regular/terminal-window.svg'
import { ReactComponent as SidebarIcon } from '@phosphor-icons/core/regular/sidebar.svg'
import { ReactComponent as ChatsIcon } from '@phosphor-icons/core/regular/chats.svg'
import { ReactComponent as OSIIcon } from '@assets/osi.svg'
import ServiceHeader from '@components/ServiceHeader'

interface Props {}

const ServicesSection: React.FC<Props> = () => {
  return (
    <section className={'flex flex-col md:flex-row md:p-28 pl-5 pt-16 pb-36'}>
      <div className={'flex-1 pb-6'}>
        <SectionMark
          title={'Leistungen'}
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div
        className={
          'flex-[2.58] grid grid-cols-1 md:grid-cols-2 md:grid-rows-[repeat(7,auto)] md:grid-flow-col gap-x-6'
        }
      >
        <ServiceHeader
          title={'Entwicklung'}
          text={'Individuelle Software-Lösungen sind unsere Leidenschaft'}
          dark={true}
        />
        <ServiceItem
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
          dark={true}
          icon={<LightningIcon />}
        />
        <ServiceItemDivider className={'bg-black'} />
        <ServiceItem
          title={'Backend'}
          text={
            'Wir konstruieren performante Server-Anwendungen mit Hilfe von APIs, Microservices und Datenbanken.'
          }
          dark={true}
          icon={<TerminalWindowIcon />}
        />
        <ServiceItemDivider className={'bg-black'} />
        <ServiceItem
          title={'Frontend'}
          text={
            'Wir implementieren hochwertige und interaktive Frontends mit Hilfe modernster Web-Technologien.'
          }
          dark={true}
          icon={<SidebarIcon />}
        />
        <div className={'h-8 bg-black hidden md:block'} />
        <div className={'h-4 md:hidden'} />

        <ServiceHeader
          title={'Consulting & Strategie'}
          text={'Vertrauen Sie auf unsere langjährige Digital-Kompetenz'}
        />
        <ServiceItem
          title={'Webanwendungen'}
          text={
            'Wir kennen den Markt und helfen dabei, die ideale Softwarelösung für Ihren Use Case zu finden.'
          }
          icon={<GlobeIcon />}
        />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Open Source'}
          text={
            'Wir helfen Ihnen, Software, Methoden & Prozesse aus der Open-Source-Welt zu verstehen und einzusetzen.'
          }
          icon={<OSIIcon />}
        />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Messaging'}
          text={'Wir helfen Ihnen dabei, die ideale Messenger-Lösung für Ihr Szenario zu finden.'}
          icon={<ChatsIcon />}
        />
        <div className={'h-8 bg-bb-grey-200 hidden md:block'} />
      </div>
    </section>
  )
}

export default ServicesSection
