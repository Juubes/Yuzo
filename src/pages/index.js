import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuzo</title>
        <meta
          name="description"
          content="Social media project using Google's image recognition API with NextJS & Firebase."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>header</header>

      <main className={styles.main}>main</main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
}
