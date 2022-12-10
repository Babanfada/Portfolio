import Head from "next/head";
import Image from "next/image";
import Meta from "../public/Meta";
import styles from "../styles/Home.module.css";
import hort from "../public/images/hort.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <Meta id={0} />
      <Image src={hort} alt="draft" />
      <div>this is home</div>
    </div>
  );
}
