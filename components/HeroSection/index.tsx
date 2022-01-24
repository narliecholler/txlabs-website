/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
// @ts-ignore
import TextScrambler from 'react-scramble-text';
import 'react-scramble-text/dist/index.css';
import Section from '../Section';
import MeshLogo from '../MeshLogo';
import ParticleCanvas from 'components/ParticleCanvas';

const HeroSection = () => (
  <Section className="bg-heroMobile bg-no-repeat bg-cover lg:bg-hero lg:bg-hero-size bg-gradient lg:pb-[200px]">
    <div className="pt-[8rem] pb-[3rem] container flex flex-col items-center gap-8">
      <Fade delay={500}>
        <MeshLogo />
        <div className="max-w-5xl">
          <h1 className="text-[2.4rem] leading-none text-center lg:text-[5rem]">
            Web3 Metalayer
          </h1>
        </div>
        <div className="text-scrambler">
          <TextScrambler
            phrases={[
              'TX Mesh is a Web3 metalayer empowering hybrid on-off-chain services & spplications.',
              'TX Mesh facilitates on-off-chain data flow and service logic.',
              'TX Mesh connects Web2 and Web3 ecosystems.',
            ]}
            speed={10}
            pauseTime={7000}
            symbolColor="rgb(255, 255, 255)"
          />
        </div>
      </Fade>
      <ParticleCanvas
        style={{ position: "absolute", "margin-top": "12rem", "z-index": "-100" }}
        size={10}
        seperation={300}
        amountx={100}
        amounty={70}
        position={[100, 700, 400]}
      />
    </div>
  </Section>
);

export default HeroSection;
