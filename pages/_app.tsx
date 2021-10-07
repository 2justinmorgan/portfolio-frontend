import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <title>www.JustinLeeMorgan.com</title>
        <meta
          name="description"
          content="The porfolio site of Justin Lee Morgan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
