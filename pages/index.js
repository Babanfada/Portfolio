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
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={styles.container}
    >
      <Meta id={0} />
      <Detailsme />
    </motion.div>
  );
}
