import type React from 'react'
import { SectionMark } from '@components'
import BbBracket from '@assets/bb_bracket.svg?react'

interface AboutUsSectionProps {}

const AboutUsSection: React.FC<AboutUsSectionProps> = () => {
  return (
    <>
      <div className={'text-white lg:col-span-3 lg:col-start-2'}>
        <SectionMark
          title={'Über uns'}
          className='mb-4 lg:mb-0'
          classNameLine={'bg-white/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'text-white flex-[2.58] mt-6 md:mt-0 col-span-7 z-10'}>
        <h3 className={'text-xl md:text-bb-3xl font-grotesk'}>
          Unsere Leidenschaft ist gute, individuelle Software, die Menschen das Leben leichter
          macht.
        </h3>
        <p className={'opacity-75 text-base md:text-xl leading-8 mt-10'}>
          Wir haben uns am ersten Tag unseres Informatik-Studiums kennengelernt und seitdem
          entwickeln wir gemeinsam Software. Nach dem Ende unseres Studiums, sammelten wir getrennt
          Berufserfahrung in verschiedenen Branchen und im Jahr 2022 haben wir gemeinsam die
          bitbetter GmbH gegründet.
        </p>
      </div>
      <BbBracket className='rotate-180 text-bb-grey-600 absolute w-56 md:w-72 -bottom-28 -right-4 md:-top-24 md:-right-16' />
    </>
  )
}

export default AboutUsSection
