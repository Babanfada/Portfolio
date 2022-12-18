
import styles from "../styles/contact.module.css";
import ContactInput from "../Components/ContactInput";
import { contactData } from "./Data";
const ContactComponent = () => {
  return (
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
      <div>
        <ContactInput />
      </div>
    </div>
  );
}

export default ContactComponent
