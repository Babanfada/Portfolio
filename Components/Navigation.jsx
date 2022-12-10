import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../styles/Navigation.module.css";
import { Avatar } from "@mui/material";

const style1 = {
  border: "1px solid red",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "150px",
  height: "50px",
  padding: "5px 15px 5px 15px",
  gap: "3vw",
  borderRadius: "25px",
};

const Navigation = () => {
  return (
    <div style={style1}>
      <div
        className={(styles.icon)}
        style={{ fontSize: "larger" }}
      >
        Home
      </div>
      <Avatar>
        <HomeIcon sx={{ fonstSize: "40" }} />
      </Avatar>
    </div>
  );
};

export default Navigation;
