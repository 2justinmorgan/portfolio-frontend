import React from "react";
import Head from "next/head";

const Header: React.FunctionComponent = () => {
  return (
    <div data-testid="header-testid">
      <Head>
        <title>www.JustinLeeMorgan.com</title>
        <meta
          name="description"
          content="The porfolio site of Justin Lee Morgan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Header;
