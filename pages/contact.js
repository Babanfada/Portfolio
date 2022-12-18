import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/pageHeader";
import ContactComponent from "../Components/ContactComponent";

// import styles from "../styles/contact.module.css";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { contactData } from "../Components/Data";
const contact = () => {
  return (
    <div>
      <Meta id={3} />
      <PageHeader id={2} />
      <ContactComponent />
      
    </div>
  );
};

export default contact;
