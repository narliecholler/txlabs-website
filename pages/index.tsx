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
      <title>TX Labs</title>
      <meta name="description" content="TX Labs" />
      <link rel="icon" href="/png/fav.png" />
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
