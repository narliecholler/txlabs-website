import type { AppProps } from 'next/app';
import 'styles/globals.css';
import { Layout } from 'components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
