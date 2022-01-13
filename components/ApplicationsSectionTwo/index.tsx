/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import TwoColContainer from '../TwoColContainer';
import InformationSwiper from '../InformationSwiper';

const ApplicationsSectionTwo = () => (
  <Fade>
    <Section className="relative">
      <div className="block lg:hidden z-[-99] absolute top-[10%] left-[-20%] w-[1000px] h-[1000px] bg-center bg-no-repeat bg-cover bg-gradient-two"></div>
      <TwoColContainer>
        <img
          className="hidden lg:block lg:mt-[170px] lg:scale-130 lg:ml-[-20%]"
          src="/png/pillars.png"
          alt="Applications section two illustration"
        />
        <InformationSwiper
          slides={[
            {
              title:
                'Currently, off-chain applications require developers to build their own node infrastructures individually and repetitively.',
              body: 'These node infrastructures can take up to 6-12 months to build, a huge time and financial commitment compared to that of smart contract based on-chain applications.',
            },
            {
              title:
                'Building off-chain applications can be compared to building on-chain applications without a general-purpose underlying platform like Ethereum.',
              body: 'I.e. Namecoin - a legacy platform mirroring aspects of ENS (Ethereum Name Service) but with a standalone blockchain for its backend.',
            },
            {
              title:
                'The cumbersome nature of developing off-chain applications is hindering the integration between Web2 and Web3 paradigms.',
              body: 'With a more robust off-chain ecosystem utilizing data and resources from both Web2 and Web3 worlds, we will be seeing not only more capable on-chain applications, but also a more cohesive integration between both ecosystems.',
            },
          ]}
        />
        <img
          className="block lg:hidden"
          src="/png/ecosystem.png"
          alt="Applications section two illustration"
        />
      </TwoColContainer>
      <div className="hidden z-[-99] lg:block absolute top-[-10%] left-[20%] w-[2000px] h-[1500px] bg-center bg-no-repeat bg-cover lg:bg-right bg-gradient-two"></div>
    </Section>
  </Fade>
);

export default ApplicationsSectionTwo;
