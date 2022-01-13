/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import TwoColContainer from '../TwoColContainer';
import TechnicalStructureSectionGrid from '../TechnicalStructureSectionGrid';

const TechnicalStructureSection = () => (
  <Fade>
    <Section topPadding className="z-[10] relative mt-[-7rem] lg:mt-[0] lg:pt-[3rem]">
      <div className="container hidden lg:block">
        <h2>
          TX Mesh Technical Structure
        </h2>
        <img
          className="w-full h-auto"
          src="/png/tech-structure-section-illustration.png"
          alt=" Tech structure section illustration"
        />
      </div>
      <div className="lg:hidden">
        <TwoColContainer>
          <h2 className="text-center">
            TX Mesh Technical Structure
          </h2>
          <img
            className="w-full h-auto"
            src="/png/tech-structure-section-illustration-mobile.png"
            alt="Technical structure section illustration"
          />
          <TechnicalStructureSectionGrid
            items={[
              {
                title: 'Modular plug-and-play design',
                body: 'Official tool kits for an easy development experience including pluggable BFT, on-chain identity modules and more.',
              },
              {
                title: 'Service framework',
                body: 'Robust framework that supports a wide range of service logic.',
              },
              {
                title: 'General-purpose node communication protocol',
                body: 'P2P network that features local consensus and facilitates both data and service based transactions.',
              },
              {
                title: 'Flexible hardware specifications',
                body: 'TX Mesh network supports a wide range of hardware specifications. The likes of Raspberry Pi are sufficient.',
              },
            ]}
          />
        </TwoColContainer>
      </div>
      <div className="z-[-1] absolute top-[30%] w-[100%] h-[100%] z-[-20] lg:w-[1500px] lg:h-[1500px] bg-center bg-no-repeat bg-cover lg:block lg:bg-right lg:bg-contain bg-gradient-three"></div>
    </Section>

  </Fade>
);

export default TechnicalStructureSection;
