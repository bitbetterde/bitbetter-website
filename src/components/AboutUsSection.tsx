import type React from 'react'
import SectionMark from '@components/SectionMark'

interface Props {}

const AboutUsSection: React.FC<Props> = () => {
  return (
    <section className={'text-white flex p-28'}>
      <div className={'flex-1'}>
        <SectionMark
          title={'Über uns'}
          classNameLine={'bg-white/75'}
          classNameText={'opacity-75'}
        />
      </div>
      <div className={'flex-[2.58]'}>
        <h3 className={'text-bb-3xl font-grotesk'}>
          Wir sind Software-Entwickler aus Hamburg. Unsere Leidenschaft ist gute, individuelle
          Software, die Menschen das Leben leichter macht.
        </h3>
        <p className={'opacity-75 text-xl leading-8 mt-10'}>
          Est curabitur egestas dolor pellentesque est interdum ut vulputate. Pulvinar massa
          tincidunt vulputate sapien arcu. Sollicitudin sed eget adipiscing ante aenean id vel nulla
          aliquet. Aliquam accumsan orci molestie nec amet iaculis sapien. Eget magna mattis platea
          pretium in et sollicitudin fusce ipsum.
        </p>
        <div className={'flex mt-[5.5rem] gap-36'}>
          <div>
            <img src='./moritz.png' className='w-14 h-14 rounded-full' />
            <p className={'mt-5 text-xl leading-8'}>
              <b>Moritz Stückler</b> ist Est curabitur egestas dolor pellentesque est interdum ut
              vulputate. Pulvinar massa tincidunt vulputate sapien
            </p>
          </div>
          <div>
            <img src='./fabian.png' className='w-14 h-14 rounded-full' />
            <p className={'mt-5 text-xl leading-8'}>
              <b>Fabian Schmidt</b> ist Est curabitur egestas dolor pellentesque est interdum ut
              vulputate. Pulvinar massa tincidunt vulputate sapien
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
