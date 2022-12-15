import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/pageHeader";
import styles from "../styles/contact.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { contactData } from "../Components/Data";
const contact = () => {
  return (
    <div>
      <Meta id={3} />
      <PageHeader id={2} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {contactData.map((contact, index) => {
            return (
              <div key={index} className={styles.item}>
                <div>{contact.icon}</div>

                <div style={{ color: contact.color }}>{contact.url}</div>
              </div>
            );
          })}
        </div>
        <div>message box</div>
      </div>
    </div>
  );
};

export default contact;
