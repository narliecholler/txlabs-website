/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import EcosystemSectionFeatures from '../EcosystemSectionFeatures';

const EcosystemSection = () => (
  <Fade>
    <Section topPadding className="pt-[5em] lg:pt-[8rem]">
      <div className="container flex flex-col items-center space-y-10">
        <h2 className="max-w-3xl text-center">
          TX Mesh is building the off-chain Web3 ecosystem
        </h2>
        <img
          className="w-full h-auto max-w-xl"
          src="/png/ecosystem-section-illustration.png"
          alt="Ecosystem section illustration"
        />
        <EcosystemSectionFeatures
          features={[
            'A composable, light-weight, and robust infrastructure that allows for off-chain service providers to focus purely on business development.',
            'Facilitating both data flow and service logic between Web2 and Web3 ecosystems.',
          ]}
        />
      </div>
    </Section>

  </Fade>
);

export default EcosystemSection;
