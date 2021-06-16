import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FunctionComponent = () => {
  return (
    <footer data-testid="footer-testid" className={styles.footer}></footer>
  );
};

export default Footer;
