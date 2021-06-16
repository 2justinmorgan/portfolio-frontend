import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>www.JustinLeeMorgan.com</title>
        <meta name="description" content="The porfolio site of Justin Lee Morgan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello there!
        <span className={styles.logo}>
          <Image src="/website_photo.png" alt="Website Photo" width={575} height={575} />
        </span>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;
