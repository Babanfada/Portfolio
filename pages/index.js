import Head from "next/head";
import Image from "next/image";
import Meta from "../public/Meta";
import styles from "../styles/Home.module.css";
import hort from "../public/images/fullscreendark.jpg";
import Detailsme from "../Components/Detailsme";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        // rotate: [0, 0, 270, 270, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Meta id={0} />
      <Detailsme />
    </motion.div>
  );
}
