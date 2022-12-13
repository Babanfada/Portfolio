import { dataContext } from "./Layout";
import { useContext } from "react";
import styles from "../styles/footer.module.css";
import { Avatar } from "@mui/material";
import ActiveLink from "./ActiveLink";
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
            <Avatar
              variant="round"
              sx={{ width: "50px", height: "50px" }}
              style={{
                padding: "7px",
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.109)",
              }}
            >
              <div title={listedIcon.name}>{listedIcon.icon}</div>
            </Avatar>
          </ActiveLink>
        );
      })}
    </div>
  );
};

export default Footer;
