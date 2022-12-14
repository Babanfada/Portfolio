import { dataContext } from "./Layout";
import { useContext } from "react";
import styles from "../styles/footer.module.css";
import { Avatar } from "@mui/material";
import ActiveLink from "./ActiveLink";
import { css } from "glamor";
//import styles from "../styles/detailsme.module.css";
const Footer = () => {
  const { listedIcons } = useContext(dataContext);
  return (
    <div className={styles.wrapper}>
      {listedIcons.map((listedIcon, index) => {
        return (
          <ActiveLink
            key={index}
            style={{ color: "white", textDecoration: "none" }}
            href={listedIcon.link}
          >
            <div className={styles.avatar}>
              <div title={listedIcon.name}>{listedIcon.icon}</div>
            </div>
          </ActiveLink>
        );
      })}
    </div>
  );
};

export default Footer;
