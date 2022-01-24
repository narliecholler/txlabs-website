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

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.txlabs.org" />
      <meta property="og:title" content="TX Mesh - Web3 Metalayer" />
      <meta property="og:description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />
      <meta property="og:image" content="https://www.txlabs.org/png/meta_img.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="TX Mesh - Web3 Metalayer" />
      <meta property="twitter:url" content="https://www.txlabs.org" />
      <meta property="twitter:description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />
      <meta property="twitter:image" content="https://www.txlabs.org/png/meta_img.png" />

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
