import type { NextPage } from 'next';
import Head from 'next/head';
import {
  HeroSection,
  ApplicationsSectionOne,
  ApplicationsSectionTwo,
  EcosystemSection,
  TechnicalStuctureSection,
  UseCasesSection,
  RoadmapSection,
  NewsletterSection,
} from 'components';

const Home: NextPage = () => (
  <>
    <Head>
      <title>TX Mesh - Web3 Metalayer</title>
      <meta name="title" content="TX Mesh - Web3 Metalayer" />
      <meta name="description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <HeroSection />
    <ApplicationsSectionOne />
    <ApplicationsSectionTwo />
    <EcosystemSection />
    <TechnicalStuctureSection />
    <UseCasesSection />
    <RoadmapSection />
    <NewsletterSection />
  </>
);

export default Home;
