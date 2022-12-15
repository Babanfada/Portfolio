import React from "react";
import Meta from "../public/Meta";
import PageHeader from "../Components/pageHeader";
import AboutmeDetails from "../Components/AboutmeDetails";
const about = () => {
  return (
    <div>
      <Meta id={1} />
      <PageHeader id={0} />
      <AboutmeDetails />
    </div>
  );
};

export default about;
