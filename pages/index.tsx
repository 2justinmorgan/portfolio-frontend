import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const Home: React.FunctionComponent = () => {
  return (
    <div data-testid="home-testid" className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
