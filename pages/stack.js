import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/PageHeader";
import AboutmeDetails from "../Components/AboutmeDetails";
import { motion } from "framer-motion";
const about = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      style={{ border: "3px solid yellow", width: "100%", overflow: "hidden" }}
    >
      <Meta id={1} />
      <PageHeader id={0} />
      <AboutmeDetails />
    </motion.div>
  );
};

export default about;
