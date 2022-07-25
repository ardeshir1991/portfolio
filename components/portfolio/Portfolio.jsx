import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Portfolio</h1>
      </div>
      <h2>My Last Projects :</h2>
      <ul className={styles.items}>
        <li>
          <a href="https://www.davinciblanch.com/" target="_blank">
            <img src="images/davinci.png" alt="davinciblanch.com" />
          </a>
        </li>
        <li>
          <a href="https://polvar.com/" target="_blank">
            <img src="images/polvar.png" alt="polvar.com" />
          </a>
        </li>
        <li>
          <a href="https://luxetcar.com/" target="_blank">
            <img src="images/luxetcar.png" alt="luxetcar.com" />
          </a>
        </li>
        <li>
          <a href="https://www.eyerispromo.com/" target="_blank">
            <img src="images/eyerispromo.png" alt="eyerispromo.com" />
          </a>
        </li>
        <li>
          <a href="https://maxeo.io/" target="_blank">
            <img src="images/maxeo.png" alt="maxeo.io" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
