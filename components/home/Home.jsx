import React from "react";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.info}>
          <h2>
            Hi, my name is <span>Ardeshir Esmaili</span>
          </h2>
          <h3>
            I'm a <span>web designer</span>
          </h3>
          <p>
            I am a web designer with experience of 4 years. My expretise is to
            create and design website, improve SEO of websites and more ...
          </p>
          <Link href="/contact">
            <a>Why Me?</a>
          </Link>
        </div>
        <div className={styles.homeImg}>
          <img src="/images/me.jpeg" alt="my photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
