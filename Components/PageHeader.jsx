import { pageHeaderData } from "./Data"
import styles from "../styles/pageHeader.module.css";
const pageHeader = ({ id }) => {
  return (
    <div className={styles.wrapper}>
      <div>{pageHeaderData[id].inner} </div>
      <div>
        {pageHeaderData[id].content} <span> {pageHeaderData[id].span}</span>
      </div>
    </div>
  );
};

export default pageHeader;
