import Navigation from "./Navigation";
import * as React from "react";
import { createContext, useState } from "react";
import Navigations from "./Navigations";
export const dataContext = createContext("");
import useLocalStorage from "./LocalStorage";
import ActiveLink from "./ActiveLink";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import styles from "../styles/footer.module.css";
import { icons } from "./Data";
// import profile from "/fullscreendark.jpg";
// import video from "../public/images/video.mp4"

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [openF, setOpenF] = React.useState(false);
  const handleClickF = () => {
    setOpenF(true);
  };
  const handleCloseF = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenF(false);
  };

  const [isNav, setisNav] = useState(true);
  const [isdarkmode, setisdarkmode] = useLocalStorage("darkmodestatus", false);
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

  const [Home, person, business, contact, light, dark, Menu, close] = icons;
  const listedIcons = icons.slice(0, 4);

  return (
    <dataContext.Provider
      value={{
        icons,
        badge,
        setbadge,
        listedIcons,
        open,
        setOpen,
        handleClick,
        handleClose,
        openF,
        setOpenF,
        handleClickF,
        handleCloseF,
      }}
    >
      <div
        style={{
          position: "relative",
          // height: "140vh",
          // border: "4px solid blue",
          // width: "100vw",
        }}
        className={styles.height}
      >
        {/* <video
          style={{
             border: "5px solid red",
            width: "100%",
            height: "100%",
            position: "absolute",
            // backgroundColor:"red"
          }}
          src={""}
        ></video> */}

        <div
          style={{
            position: "relative",
            //  border: "1px solid yellow", //check
            minHeight: "100vh",
            width: "100vw",
            // overflow: "hidden",
            zIndex: "0",
            background: `${isdarkmode ? "black" : "transparent"}`,
          }}
          className={styles.height}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "1px solid red",
              padding: "2vw 2vw 1vw 2vw",
              height: "100px",
              position: "fixed",
              // position: "sticky",
              // top: "0vh",
              width: "100%",
            }}
          >
            <div className={styles.toggle}>
              {isNav ? (
                <motion.div
                  whileHover={{ scale: 0.9 }}
                  onClick={handleopenMenu}
                >
                  <Navigation icon={Menu} />
                </motion.div>
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

            <motion.div whileHover={{ scale: 0.9 }} onClick={handledarkmode}>
              {isdarkmode ? (
                <Navigation icon={light} />
              ) : (
                <Navigation icon={dark} />
              )}
            </motion.div>
          </div>

          <div>{children}</div>
          <div
            style={{
              // position: "sticky",
              position: "fixed",
              // top: "90vh",
              bottom: "0",
              width: "100%",
              // border: "3px solid red",
            }}
            className={styles.footer}
          >
            <Footer />
          </div>
        </div>
      </div>
    </dataContext.Provider>
  );
};

export default Layout;
