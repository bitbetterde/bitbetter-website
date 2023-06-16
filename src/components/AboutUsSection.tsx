import type React from 'react'
import SectionMark from '@components/SectionMark'
import { ReactComponent as BbBracket } from '@assets/bb_bracket.svg'

interface Props {}

const AboutUsSection: React.FC<Props> = () => {
  return (
    <section
      className={'text-white flex flex-col md:flex-row px-5 pb-[16.5rem] pt-16 md:p-28 relative'}
    >
      <div className={'flex-1'}>
        <SectionMark
          title={'Über uns'}
          classNameLine={'bg-white/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'flex-[2.58] mt-6 md:mt-0'}>
        <h3 className={'text-xl md:text-bb-3xl font-grotesk'}>
          Wir sind Software-Entwickler aus Hamburg. Unsere Leidenschaft ist gute, individuelle
          Software, die Menschen das Leben leichter macht.
        </h3>
        <p className={'opacity-75 text-base md:text-xl leading-8 mt-10'}>
          Wir haben uns beim Studiengang Technische Informatik kennen gelernt. Nachdem wir beide das
          Studium beendet hatten, sammelten wir erste Erfahrungen in unseren Bereichen, um dannach
          mit eigenen Projekten in der Freizeit zu starten. Dadurch entsand die Idee, auch beruflich
          zusammen Projekte umzusetzen.
        </p>
        <div className={'flex flex-col md:flex-row mt-16 md:mt-[5.5rem] gap-16 md:gap-36'}>
          <div className={'flex-1'}>
            <img src='/moritz.png' className='w-14 h-14 rounded-full' />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Moritz Stückler</b> ist seit 2018 als Frontend-Entwickler tätig und war zuvor
              Jornalist. Hauptfelder sind Frontendanwendungen in React und Webframeworks.
            </p>
          </div>
          <div className={'flex-1'}>
            <div className={'w-14 h-14 rounded-full overflow-hidden '}>
              <img src='/fabian2.jpg' className='scale-[3.00] relative left-8 top-2' />
            </div>
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Fabian Schmidt</b> ist seit 2017 Full-Stack-Entwickler. Hauptfelder sind
              Backendanwendungen in Java und Frontendanwendungen in React.
            </p>
          </div>
        </div>
      </div>
      <BbBracket className='text-bb-grey-600 absolute w-56 md:w-72 -bottom-40 md:-bottom-16 md:left-0 -left-12 -z-10' />
      <BbBracket className='rotate-180 text-bb-grey-600 absolute w-56 md:w-72 -bottom-28 -right-4 md:-top-24 md:-right-16 -z-10' />
    </section>
  )
}

export default AboutUsSection
