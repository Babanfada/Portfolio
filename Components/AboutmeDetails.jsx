import Image from "next/image";
import profile from "../public/images/fullscreendark2.jpg";
import Skills from "./Skills";
import { skills } from "./Data";
import styles from "../styles/aboutmedetails.module.css";
import { motion } from "framer-motion";
const AboutmeDetails = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div whileHover={{ scale: 0.95 }} className={styles.first}>
        <Image
          className={styles.image}
          src={profile}
          alt={"draft"}
          // width={"30"}
          // height={"30"}
        />
      </motion.div>

      <div className={styles.second}>
        {skills.map((skill, index) => {
          return (
            <a key={index} href={skill.url} target={"blank"}>
              <Skills skill={skill} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AboutmeDetails;
