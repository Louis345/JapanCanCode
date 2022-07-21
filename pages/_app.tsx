import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function JCC({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JapanCanCode</title>
        <meta name="description" content="Learn English and Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default JCC;
