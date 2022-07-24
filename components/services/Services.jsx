import React from "react";
import styles from "./services.module.css";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaSearchDollar,
  FaBullhorn,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.servicesTitle}>
        <h1>Services</h1>
      </div>
      <div className={styles.servicesItems}>
        <ul>
          <li>
            <div className={styles.icon}>
              <FaMobileAlt />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
          <li>
            <div className={styles.icon}>
              <FaLaptopCode />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
          <li>
            <div className={styles.icon}>
              <FaPalette />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
          <li>
            <div className={styles.icon}>
              <FaCode />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
          <li>
            <div className={styles.icon}>
              <FaSearchDollar />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
          <li>
            <div className={styles.icon}>
              <FaBullhorn />
            </div>
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              beatae ea ducimus laborum necessitatibus laudantium eos nihil
              facilis corrupti recusandae!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
