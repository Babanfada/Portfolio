import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/pageHeader";
import ContactComponent from "../Components/ContactComponent";
import { motion } from "framer-motion";

// import styles from "../styles/contact.module.css";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { contactData } from "../Components/Data";
const contact = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{ height: "100vh" }}
    >
      <Meta id={3} />
      <PageHeader id={2} />
      <ContactComponent />
    </motion.div>
  );
};

export default contact;
