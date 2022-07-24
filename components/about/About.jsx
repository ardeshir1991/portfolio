import React from "react";
import styles from "./about.module.css";
import EducationExperiences from "./education and experiences/EducationExperiences";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Skills from "./skills/Skills";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.title}>
          <h2>About Me</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>
              I'm Ardeshir Esmaili and a <span>Web Designer</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam aspernatur cum deleniti, inventore autem cupiditate,
              dolorum, harum asperiores aperiam praesentium exercitationem
              doloremque ipsam esse veniam repellat? Atque dolore ratione
              suscipit saepe aspernatur, illum iure. Delectus dolorum
              perferendis neque eum nemo voluptate suscipit, sint, quas fuga
              maxime vitae corrupti provident nulla!
            </p>
          </div>
          <div className={styles.info}>
            <PersonalInfo />
            <Skills />
            <EducationExperiences title={"Education"} />
            <EducationExperiences title={"Experiences"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
