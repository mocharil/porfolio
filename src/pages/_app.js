import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moch. Aril Indra Permana - Data Scientist Portfolio</title>
        <meta name="description" content="Senior Data Scientist with expertise in machine learning, advanced analytics, and data-driven solutions." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;