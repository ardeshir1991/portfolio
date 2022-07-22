import React from "react";
import styles from "./personalInfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <ul>
        <li>
          Birthday : <span>28 March 1991</span>
        </li>
        <li>
          Age : <span>31</span>
        </li>
        <li>
          Email : <span>ardeshiref1991@gmail.com</span>
        </li>
        <li>
          Phone : <span>+989353049521</span>
        </li>
        <li>
          Degree : <span>Master</span>
        </li>
      </ul>
      <div className={styles.btn}>
        <button>Download CV</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
