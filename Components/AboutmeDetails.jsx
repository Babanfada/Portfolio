import Image from "next/image";
import profile from "../public/images/fullscreendark.jpg";
import Skills from "./Skills";
import { skills } from "./Data";
import styles from "../styles/aboutmedetails.module.css";
const AboutmeDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>
        <Image className={styles.image} src={profile} alt={"draft"} />
      </div>

      <div className={styles.second}>
        {skills.map((skill, index) => {
          return <Skills key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default AboutmeDetails;
