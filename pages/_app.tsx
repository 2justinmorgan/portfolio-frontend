import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
