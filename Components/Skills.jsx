import Image from "next/image";
import React from "react";
import styles from "../styles/skills.module.css";

const Skills = ({ skill }) => {
  return (
    <div title={skill.name} className={styles.wrapper}>
      <Image className={styles.image} src={skill.image} alt={"draft"} />
    </div>
  );
};

export default Skills;
