import type React from 'react'
import { SectionMark, ServiceItem, ServiceItemDivider, ServiceHeader } from '@components'
import { ReactComponent as GlobeIcon } from '@phosphor-icons/core/regular/globe.svg'
import { ReactComponent as LightningIcon } from '@phosphor-icons/core/regular/lightning.svg'
import { ReactComponent as TerminalWindowIcon } from '@phosphor-icons/core/regular/terminal-window.svg'
import { ReactComponent as LayoutIcon } from '@phosphor-icons/core/regular/layout.svg'
import { ReactComponent as ChatsIcon } from '@phosphor-icons/core/regular/chats-teardrop.svg'
import { ReactComponent as OSIcon } from '@assets/opensource.svg'
import { ReactComponent as BbBracket } from '@assets/bb_bracket_border.svg'
import TechStackItem from './TechStackItem'

interface TechItem {
  title: string
  image: string
  link: string
  order?: number
}

interface Props {
  developmentTechItems?: TechItem[]
  consultingTechItems?: TechItem[]
}

const ServicesSection: React.FC<Props> = ({ consultingTechItems, developmentTechItems }) => {
  return (
    <section className={'flex flex-col lg:flex-row lg:p-28 pl-5 pt-16 pb-20 relative'}>
      <div className={'flex-1 pb-6'}>
        <SectionMark
          title={'Leistungen'}
          classNameLine={'bg-black/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div
        className={
          'flex-[2.58] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[repeat(7,auto)] lg:grid-flow-col gap-x-6'
        }
      >
        <ServiceHeader
          title={'Entwicklung'}
          text={'Technologieoffenheit und "Full-Stack" sind unsere Spezialität'}
          dark={true}
        />
        <ServiceItem
          title={'Automatisierung'}
          text={
            'Wir verknüpfen und integrieren bestehende Dienste und sorgen für Interoperabilität und Optimierung.'
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
          icon={<LayoutIcon />}
        />
        <div className={`${developmentTechItems?.length ? '' : 'h-8'} bg-black`}>
          <h4 className='px-8 pt-8 uppercase text-lg tracking-[0.1em] text-white/75'>
            Wir entwickeln mit
          </h4>
          <div className='px-8 pt-4 pb-8 inline-grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5'>
            {developmentTechItems?.map((item, i) => (
              <TechStackItem key={i} light title={item.title} link={item.link} image={item.image} />
            ))}
          </div>
        </div>
        <div className={'h-4 lg:hidden'} />

        <ServiceHeader
          title={'Consulting & Strategie'}
          text={'IT-Enthusiasten behalten den Überblick in der Software-Welt'}
        />
        <ServiceItem
          title={'Webanwendungen'}
          text={
            'Wir kennen den Markt und helfen dabei, existierende Softwarelösungen für jedes Einsatzgebiet zu finden.'
          }
          icon={<GlobeIcon />}
        />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Open Source'}
          text={
            'Wir unterstützen dabei, Software, Methoden & Prozesse aus der Open-Source-Welt zu verstehen und einzusetzen.'
          }
          icon={<OSIcon />}
        />
        <ServiceItemDivider className={'bg-bb-grey-200'} />
        <ServiceItem
          title={'Messaging'}
          text={
            'Wir helfen unseren Kunden dabei, die ideale Messenger-Lösung zu finden und für ihr Szenario anzupassen.'
          }
          icon={<ChatsIcon />}
        />

        <div className={`${consultingTechItems?.length ? '' : 'h-8'} bg-bb-grey-200`}>
          <h4 className='px-8 pt-8 uppercase text-lg tracking-[0.1em] text-black/75'>
            Wir beraten zu
          </h4>
          <div className='px-8 py-4 inline-grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5'>
            {consultingTechItems?.map((item, i) => (
              <TechStackItem key={i} title={item.title} link={item.link} image={item.image} />
            ))}
          </div>
        </div>
      </div>
      <BbBracket className='text-bb-grey-200 -scale-x-[140%] scale-y-[140%] absolute w-72 top-[calc(50%-200px)] -left-8 hidden lg:block' />
      <BbBracket className='text-transparent stroke-black -rotate-[190deg] scale-[140%] absolute w-72 top-[calc(50%-200px)] -left-8 stroke-[0.5] hidden lg:block' />
    </section>
  )
}

export default ServicesSection
