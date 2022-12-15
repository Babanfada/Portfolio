import Image from "next/image";
import React from "react";
import styles from "../styles/skills.module.css";
import { motion } from "framer-motion";
const Skills = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      title={skill.name}
      className={styles.wrapper}
    >
      <Image className={styles.image} src={skill.image} alt={"draft"} />
    </motion.div>
  );
};

export default Skills;
