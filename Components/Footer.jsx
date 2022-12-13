import { dataContext } from "./Layout";
import { useContext } from "react";

const Footer = () => {
  const { listedIcons } = useContext(dataContext);
  return (
    <div>
      {listedIcons.map((listedIcon, index) => {
        return <div key={index}>{listedIcon.icon}</div>;
      })}
    </div>
  );
};

export default Footer;
