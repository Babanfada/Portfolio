import Head from "next/head";
import Image from "next/image";
import Meta from "../public/Meta";
import styles from "../styles/Home.module.css";
import hort from "../public/images/fullscreendark.jpg";
import Detailsme from "../Components/Detailsme";
export default function Home() {
  return (
    <div className={styles.container}>
      <Meta id={0} />
      <Detailsme />
    </div>
  );
}
