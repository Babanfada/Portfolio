import HomeIcon from "@mui/icons-material/Home";
import styles from "../styles/Navigation.module.css";
import { Avatar } from "@mui/material";
import { dataContext } from "./Layout";
import { useContext } from "react";

const Navigation = () => {
  const { icon } = useContext(dataContext);
  const [Menu, Home, , , , , contact] = icon;

  return (
    <div>
      <Avatar
        sx={{ width: "60px", height: "60px" }}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.109)",
        }}
      >
        {/* <HomeIcon /> */}
        {contact.icon}
      </Avatar>
    </div>
  );
};

export default Navigation;
