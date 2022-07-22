import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <ul>
        <li>
          <div>
            <h5>CSS</h5>
            <span>80%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "80%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>HTML</h5>
            <span>90%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "90%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>JavaScript</h5>
            <span>80%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "80%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Tailwind</h5>
            <span>50%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "50%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Bootstrap</h5>
            <span>60%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "60%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>React.js</h5>
            <span>80%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "80%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Next.js</h5>
            <span>80%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "80%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Node</h5>
            <span>80%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "80%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Mongo</h5>
            <span>85%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "85%" }}></span>
          </div>
        </li>
        <li>
          <div>
            <h5>Git</h5>
            <span>90%</span>
          </div>
          <div className={styles.percentage}>
            <span style={{ width: "90%" }}></span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
