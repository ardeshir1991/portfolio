import React from "react";
import styles from "./education.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const EducationExperiences = ({ title }) => {
  return (
    <div className={styles.education}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.timeLine}>
        <ul>
          <li>
            <div className={styles.circleDot}></div>
            <h3>
              <FaRegCalendarAlt /> 2009 - 2014
            </h3>
            <h4>Master in Agriculture of Engineering</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              dolore ullam iure necessitatibus provident atque tenetur, quidem
              architecto reprehenderit dicta animi repudiandae aliquid accusamus
              earum nisi vero quis deleniti error?
            </p>
          </li>
          <li>
            <div className={styles.circleDot}></div>
            <h3>
              <FaRegCalendarAlt /> 2009 - 2014
            </h3>
            <h4>Master in Agriculture of Engineering</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              dolore ullam iure necessitatibus provident atque tenetur, quidem
              architecto reprehenderit dicta animi repudiandae aliquid accusamus
              earum nisi vero quis deleniti error?
            </p>
          </li>
          <li>
            <div className={styles.circleDot}></div>
            <h3>
              <FaRegCalendarAlt /> 2009 - 2014
            </h3>
            <h4>Master in Agriculture of Engineering</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              dolore ullam iure necessitatibus provident atque tenetur, quidem
              architecto reprehenderit dicta animi repudiandae aliquid accusamus
              earum nisi vero quis deleniti error?
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationExperiences;
