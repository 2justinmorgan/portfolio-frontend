import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const router = useRouter();

  return (
    <div
      data-testid="myapp-testid"
      style={{ height: "100vh", backgroundColor: "#ecebec" }}
    >
      <Head>
        <title>www.JustinLeeMorgan.com</title>
        <meta
          name="description"
          content="The porfolio site of Justin Lee Morgan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <br />
      <Container maxWidth="lg">
        <Card
          raised={true}
          sx={{ padding: "0 20px 20px 20px", backgroundColor: "#f3f3f3" }}
        >
          <h1>
            {router.pathname.charAt(1).toUpperCase() + router.pathname.slice(2)}
          </h1>
          <hr style={{ margin: "-10px 0 30px 0" }} />
          <Component {...pageProps} />
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default MyApp;
