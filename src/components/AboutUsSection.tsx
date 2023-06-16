import type React from 'react'
import { SectionMark } from '@components'
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
          Unsere Leidenschaft ist gute, individuelle Software, die Menschen das Leben leichter
          macht.
        </h3>
        <p className={'opacity-75 text-base md:text-xl leading-8 mt-10'}>
          Wir haben uns am ersten Tag unseres Informatik-Studiums kennengelernt und seitdem
          entwickeln wir gemeinsam Software. Nach dem Ende unseres Studiums, sammelten wir
          Berufserfahrung in verschiedenen Branchen und im Jahr 2022 haben wir gemeinsam die
          bitbetter GmbH gegründet.
        </p>
        <div className={'flex flex-col md:flex-row mt-16 md:mt-[5.5rem] gap-16 md:gap-36'}>
          <div className={'flex-1'}>
            <img
              src='/moritz_avatar.png'
              className='w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all ease-in-out duration-300'
            />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Moritz Stückler</b> arbeitete zunächst viele Jahre als IT-Journalist und entschied
              sich 2014 für den Berufswechsel zum Software-Entwickler. Nach dem Studium arbeitete er
              als Full-Stack-Entwickler in Produktfirmen und Agenturen. Sein Schwerpunkt sind
              Frontend-Technologien, CMS-Systeme und Open-Source-Software.
            </p>
          </div>
          <div className={'flex-1'}>
            <img
              src='/fabian_avatar.png'
              className='w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all ease-in-out duration-300'
            />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Fabian Schmidt</b> arbeitet seit 2017 als Full-Stack-Entwickler in einer
              Anwaltskanzlei. Er kümmert sich vor allem um die Automatisierung und Optimierung von
              Geschäftsprozessen. Seine fachlichen Schwerpunkte sind Backend-Anwendungen, Web-API
              und Datenbanken.
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
