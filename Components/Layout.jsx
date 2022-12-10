import Navigation from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import { createContext, useState } from "react";
export const dataContext = createContext("");

const Layout = ({ children }) => {
  const icon = [
    {
      icon: <MenuIcon sx={{ fonstSize: "50" }} />,
      name: "Menu",
    },
    {
      icon: <HomeIcon sx={{ fonstSize: "50" }} />,
      name: "Home",
    },
    {
      icon: <LightModeIcon sx={{ fonstSize: "50" }} />,
      name: "Light",
    },
    {
      icon: <DarkModeIcon sx={{ fonstSize: "50" }} />,
      name: "Dark",
    },
    {
      icon: <PersonIcon sx={{ fonstSize: "50" }} />,
      name: "Person",
    },
    {
      icon: <BusinessCenterIcon sx={{ fonstSize: "50" }} />,
      name: "portfolio",
    },
    {
      icon: <ContactPhoneIcon sx={{ fonstSize: "50" }} />,
      name: "contact",
    },
  ];
  return (
    <dataContext.Provider value={{ icon }}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Navigation />
        </div>
        <div>{children}</div>
        <div>footer</div>
      </div>
    </dataContext.Provider>
  );
};

export default Layout;
