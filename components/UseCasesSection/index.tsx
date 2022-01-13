/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import TwoColContainer from '../TwoColContainer';
import InformationSwiper from '../InformationSwiper';

const UseCasesSection = () => (
  <Fade>
    <Section topPadding className="relative bg-center bg-no-repeat bg-cover lg:bg-contain">
      <img
        className="scale-[1.4] mt-[-4rem] pb-[6rem] ml-[7rem] lg:hidden"
        src="/png/use_case_array.png"
        alt="Use cases section illustration"
      />
      <div className="container">
        <h2 className="text-[2.75rem] leading-none lg:text-[5rem] pb-[1rem] lg:pb-[5rem]">
          Use cases
        </h2>
      </div>
      <TwoColContainer className="relative">
        <InformationSwiper
          slides={[
            {
              title:
                'TX Swap is an off-chain liquidity aggregation platform built on TX Mesh that connects cross-chain market makers & arbitrageurs directly with retail users.',
              body: 'TX Swap can aggregate market makers and arbitrageurs’ various liquidity sources across different on-chain and off-chain ecosystems including CEX, AMM, lending pools, dark pools, etc, allowing retail users to have the best prices and asset coverages by directly trading with these market makers and arbitrageurs.',
            },
            {
              title: 'The next 100 Oracles, Bridges, and innovative use cases.',
              body: 'With the general-purpose design of TX Mesh network, off-chain business logic, written as procedures with pre-defined transaction types, can be re-implemented by different service providers. This allows the network to have an increasing amount of marginal utility. We believe that with off-chain composability and healthy competition, TX Mesh will help drive the next stage of growth for the entire Web3 ecosystem.',
            },
            {
              title: 'Interoperability among off-chain applications.',
              body: 'In the TX Mesh ecosystem, the ability to re-implement business logic or procedures allows interoperability among different off-chain applications that utilize the same set of transaction types and ABI call standards. Off-chain applications with distinct consensus mechanisms, such as roll-ups, will be able to cohesively transmit data and services for the first time.',
            },
          ]}
        />
        <img
          className="hidden absolute lg:block scale-100 ml-[60%] lg:mt-[-20%]"
          src="/png/use_case_array.png"
          alt="Use cases section illustration"
        />
      </TwoColContainer>
      <div className="block lg:hidden z-[-10] absolute top-[60%] left-[-10%] h-[1000px] w-[1000px] bg-contain bg-center bg-no-repeat bg-gradient-four"></div>
    </Section>
  </Fade>
);

export default UseCasesSection;
