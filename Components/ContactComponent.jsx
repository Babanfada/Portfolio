import styles from "../styles/contact.module.css";
import ContactInput from "../Components/ContactInput";
import { contactData } from "./Data";
import Link from "next/link";
const ContactComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {contactData.map((contact, index) => {
          return (
            <div key={index} className={styles.item}>
              <a
                className={styles.item}
                href={contact.link}
                rel="noreferrer"
                target={"_blank"}
              >
                <div>{contact.icon}</div>
                <div style={{ color: contact.color }}>{contact.url}</div>
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <ContactInput />
      </div>
    </div>
  );
};

export default ContactComponent;
