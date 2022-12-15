import Image from "next/image";
import profile from "../public/images/fullscreendark.jpg";
import Skills from "./Skills";
import { skills } from "./Data";
import styles from "../styles/aboutmedetails.module.css";
import { motion } from "framer-motion";
const AboutmeDetails = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div whileHover={{ scale: 0.95 }} className={styles.first}>
        <Image className={styles.image} src={profile} alt={"draft"} />
      </motion.div>

      <div className={styles.second}>
        {skills.map((skill, index) => {
          return <Skills key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default AboutmeDetails;
