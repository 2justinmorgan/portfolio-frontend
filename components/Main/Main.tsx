import React from "react";
import Image from "next/image";
import styles from "./Main.module.css";

const Main: React.FunctionComponent = () => {
  return (
    <main className={styles.main}>
      Hello there!
      <span className={styles.logo}>
        <Image
          src="/website_photo.png"
          alt="Website Photo"
          width={575}
          height={575}
        />
      </span>
    </main>
  );
};

export default Main;
