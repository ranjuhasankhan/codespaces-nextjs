import Head from 'next/head';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Asia Travel - Explore Asia's Best Destinations</title>
        <meta name="description" content="Book your next adventure with Asia Travel. Discover top Asian destinations, weather, and more!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asia Travel" />
        <meta property="og:description" content="Book your next adventure with Asia Travel. Discover top Asian destinations, weather, and more!" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
