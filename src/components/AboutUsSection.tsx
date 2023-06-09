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
          Est curabitur egestas dolor pellentesque est interdum ut vulputate. Pulvinar massa
          tincidunt vulputate sapien arcu. Sollicitudin sed eget adipiscing ante aenean id vel nulla
          aliquet. Aliquam accumsan orci molestie nec amet iaculis sapien. Eget magna mattis platea
          pretium in et sollicitudin fusce ipsum.
        </p>
        <div className={'flex flex-col md:flex-row mt-16 md:mt-[5.5rem] gap-16 md:gap-36'}>
          <div>
            <img src='./moritz.png' className='w-14 h-14 rounded-full' />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Moritz Stückler</b> ist Est curabitur egestas dolor pellentesque est interdum ut
              vulputate. Pulvinar massa tincidunt vulputate sapien
            </p>
          </div>
          <div>
            <img src='./fabian.png' className='w-14 h-14 rounded-full' />
            <p className={'mt-5 text-base md:text-xl leading-8'}>
              <b>Fabian Schmidt</b> ist Est curabitur egestas dolor pellentesque est interdum ut
              vulputate. Pulvinar massa tincidunt vulputate sapien
            </p>
          </div>
        </div>
      </div>
      <BbBracket className='text-bb-grey-600 absolute w-72 -bottom-16 left-0 -z-10' />
      <BbBracket className='rotate-180 text-bb-grey-600 absolute w-72 -top-24 -right-16 -z-10' />
    </section>
  )
}

export default AboutUsSection
