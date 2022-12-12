import Navigation from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { createContext, useState } from "react";
import Navigations from "./Navigations";
export const dataContext = createContext("");
import useLocalStorage from "./LocalStorage";
import { green, yellow, red, grey, purple, blue } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [isNav, setisNav] = useState(true);
  const [isdarkmode, setisdarkmode] = useLocalStorage("darkmodestatus", true);
  const [badge, setbadge] = useState(false);

  const handleopenMenu = () => {
    setisNav(false);
  };
  const handlecloseMenu = () => {
    setisNav(true);
  };
  const handledarkmode = () => {
    setisdarkmode((prev) => !prev);
  };

  // const handleBadge = (e) => {
  //   setbadge((prev) => !prev);
  // };
  const icons = [
    {
      icon: (
        <HomeIcon
          color="secondary"
          sx={{ fonstSize: "50", color: yellow[500] }}
        />
      ),
      name: "Home",
      color: "#ffeb3b",
      // badge: handleBadge,
      link: "/",
    },

    {
      icon: (
        <PersonIcon
          color="success"
          sx={{ fonstSize: "50", color: blue[500] }}
        />
      ),
      name: "Person",
      color: "#2196f3",
      link: "/about",
    },
    {
      icon: <BusinessCenterIcon sx={{ fonstSize: "50", color: "purple" }} />,
      name: "Portfolio",
      color: "#9c27b0",
      link: "/portfolio",
    },
    {
      icon: <ContactPhoneIcon sx={{ fonstSize: "50", color: green[500] }} />,
      name: "Contact",
      style1: "0px",
      color: "#4caf50",
      link: "/contact",
    },
    {
      icon: <LightModeIcon sx={{ fonstSize: "50", color: yellow[500] }} />,
      name: "Light",
    },
    {
      icon: <DarkModeIcon sx={{ fonstSize: "50", color: blue[500] }} />,
      name: "Dark",
    },
    {
      icon: <MenuIcon sx={{ fonstSize: "50", color: yellow[500] }} />,
      name: "Menu",
      style1: "0px",
    },
    {
      icon: <CloseIcon sx={{ fonstSize: "50", color: red[900] }} />,
      name: "",
      style: "0px",
      // toggle: handlecloseMenu,
    },
  ];

  const [Home, person, business, contact, light, dark, Menu, close] = icons;
  const listedIcons = icons.slice(0, 4);

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <dataContext.Provider value={{ icons, badge, setbadge }}>
      <div
        style={{
          border: "1px solid blue",
          height: "100vh",
          backgroundColor: `${isdarkmode ? "black" : "grey"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid red",
            padding: "2vw 2vw 1vw 2vw",
            height: "100px",
          }}
        >
          <div>
            {isNav ? (
              <div onClick={handleopenMenu}>
                <Navigation icon={Menu} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0vh",
                }}
              >
                <div onClick={handlecloseMenu}>
                  <Navigation icon={close} />
                </div>
                <div>
                  {listedIcons.map((icon, index) => {
                    return (
                      <ActiveLink
                        style={{ color: "white", textDecoration: "none" }}
                        key={index}
                        href={icon.link}
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 1, height: "100%" },
                          }}
                          exit={{ opacity: 1 }}
                          onClick={handlecloseMenu}
                        >
                          <Navigations icon={icon} />
                        </motion.div>
                      </ActiveLink>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div onClick={handledarkmode}>
            {isdarkmode ? (
              <Navigation icon={light} />
            ) : (
              <Navigation icon={dark} />
            )}
          </div>
        </div>

        <div>{children}</div>
        <div>footer</div>
      </div>
    </dataContext.Provider>
  );
};

export default Layout;
