import React from "react";
import About from "../about/About";
import Home from "../home/Home";
import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default Content;
