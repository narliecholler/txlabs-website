/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import TwoColContainer from '../TwoColContainer';
import ApplicationsSectionOneGrid from '../ApplicationsSectionOneGrid';

const ApplicationsSectionOne = () => (
  <Fade>
    <Section topPadding className="relative pb-[9rem] pt-[11rem] lg:pb-[5rem] lg:pt[5rem] lg:mb-[5rem]">
      <TwoColContainer>
        <div>
          <h2 className="max-w-xl pb-[3rem]">
            Off-chain applications will help drive the next stage of growth in
            the crypto industry.
          </h2>
          <img
            className="hidden lg:block scale-[1.8] ml-[-60%] mt-[30%]"
            src="/png/illustration_2.png"
            alt="Applications section one illustration"
          />
        </div>
        <ApplicationsSectionOneGrid
          items={[
            {
              icon: 'oracles',
              title: 'Oracles',
            },
            {
              icon: 'bridges',
              title: 'Bridges',
            },
            {
              icon: 'roll-ups',
              title: 'Roll-ups',
            },
            {
              icon: 'storage',
              title: 'Storage',
            },
            {
              icon: 'computations',
              title: 'Computations',
            },
            {
              icon: 'more',
              title: 'More...',
            },
          ]}
        />
        <img
          className="lg:hidden scale-[1.7] ml-[-20%] mt-[30%]"
          src="/png/illustration_2.png"
          alt="Applications section one illustration"
        />
      </TwoColContainer>
      <div className="z-[-99] absolute w-[100%] h-[100%] top-[20%] lg:top-[-10%] lg:left-[-20%] lg:w-[1500px] lg:h-[1500px] bg-center bg-no-repeat bg-cover lg:mb-[5rem] lg:bg-contain lg:bg-section-two bg-gradient-one"></div>
    </Section>
  </Fade>
);

export default ApplicationsSectionOne;
