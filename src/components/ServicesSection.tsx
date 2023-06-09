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
import { ReactComponent as BbBracket } from '@assets/bb_bracket_border.svg'

interface Props {}

const ServicesSection: React.FC<Props> = () => {
  return (
    <section className={'flex p-28 relative'}>
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
          <h3 className={'text-bb-3xl font-grotesk mt-[5.5rem]'}>
            Vertrauen Sie auf unsere langjährige Digital-Kompetenz
          </h3>
        </div>
        <ServiceItem
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren Ihre bestehenden Dienste und sorgen für Interoperabilität und Optimierung.'
          }
          dark={true}
          icon={<LightningIcon />}
        />
        <ServiceItem
          title={'Webanwendungen'}
          text={
            'Wir kennen den Markt und helfen dabei, die ideale Softwarelösung für Ihren Use Case zu finden.'
          }
          icon={<GlobeIcon />}
        />
        <ServiceItemDivider className={'bg-black'} />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Backend'}
          text={
            'Wir konstruieren performante Server-Anwendungen mit Hilfe von APIs, Microservices und Datenbanken.'
          }
          dark={true}
          icon={<TerminalWindowIcon />}
        />
        <ServiceItem
          title={'Open Source'}
          text={
            'Wir helfen Ihnen, Software, Methoden & Prozesse aus der Open-Source-Welt zu verstehen und einzusetzen.'
          }
          icon={<OSIIcon />}
        />
        <ServiceItemDivider className={'bg-black'} />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Frontend'}
          text={
            'Wir implementieren hochwertige und interaktive Frontends mit Hilfe modernster Web-Technologien.'
          }
          dark={true}
          icon={<SidebarIcon />}
        />
        <ServiceItem
          title={'Messaging'}
          text={'Wir helfen Ihnen dabei, die ideale Messenger-Lösung für Ihr Szenario zu finden.'}
          icon={<ChatsIcon />}
        />
        <div className={'h-8 bg-black'} />
        <div className={'h-8 bg-bb-grey-200'} />
      </div>
      <BbBracket className='text-bb-grey-200 -scale-x-[140%] scale-y-[140%] absolute w-72 top-[calc(50%-200px)] -left-8' />
      <BbBracket className='text-transparent stroke-black -rotate-[190deg] scale-[140%] absolute w-72 top-[calc(50%-200px)] -left-8 stroke-[0.5]' />
    </section>
  )
}

export default ServicesSection
