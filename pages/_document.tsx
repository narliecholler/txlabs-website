import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <meta name="title" content="TX Mesh - Web3 Metalayer" />
          <meta name="description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.txlabs.org" />
          <meta property="og:title" content="TX Mesh - Web3 Metalayer" />
          <meta property="og:description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />
          <meta property="og:image" content="/png/meta_img.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="TX Mesh - Web3 Metalayer" />
          <meta property="twitter:url" content="https://www.txlabs.org" />
          <meta property="twitter:description" content="TX Mesh is a Web3 Metalayer empowering hybrid on-off-chain services & applications" />
          <meta property="twitter:image" content="/png/meta_img.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
