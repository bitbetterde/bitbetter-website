import type React from 'react'
import { Avatar, SectionMark } from '@components'
import BbBracket from '@assets/bb_bracket.svg?react'

interface WhoWeAreSectionProps {}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = () => {
  return (
    <>
      <div id={'whoweare'} className={'text-white lg:col-span-3 lg:col-start-2'}>
        <SectionMark
          title={'Über uns'}
          className='mb-4 lg:mb-0'
          classNameLine={'bg-white/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'text-white flex-[2.58] mt-6 md:mt-0 col-span-7 z-20'}>
        <div className={'grid grid-cols-1 sm:grid-cols-7 gap-8'}>
          <div className={'col-span-1 sm:col-span-3'}>
            <Avatar
              jpgSrc='/images/moritz_avatar.jpg'
              webpSrc='/images/moritz_avatar.webp'
              alt='Portrait von Moritz Stückler'
            />

            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Moritz Stückler</b> arbeitete zunächst viele Jahre als IT-Journalist und entschied
              sich 2014 für den Berufswechsel zum Software-Entwickler. Nach dem Studium arbeitete er
              als Full-Stack-Entwickler in Produktfirmen und Agenturen. Sein Schwerpunkt sind
              Frontend-Technologien, CMS-Systeme und Open-Source-Software.
            </p>
          </div>
          <div className={'col-span-1 sm:col-start-5 sm:col-span-3'}>
            <Avatar
              jpgSrc='/images/fabian_avatar.jpg'
              webpSrc='/images/fabian_avatar.webp'
              alt='Portrait von Fabian Schmidt'
            />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Fabian Schmidt</b> arbeitet seit 2017 als Full-Stack-Entwickler in einer
              Anwaltskanzlei. Er kümmert sich vor allem um die Automatisierung und Optimierung von
              Geschäftsprozessen. Seine fachlichen Schwerpunkte sind Backend-Anwendungen, Web-APIs
              und Datenbanken.
            </p>
          </div>
        </div>
      </div>
      <BbBracket className='text-bb-grey-600 absolute w-56 md:w-72 -bottom-40 md:-bottom-16 md:left-0 -left-12 z-10' />
    </>
  )
}

export default WhoWeAreSection
