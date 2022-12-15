import Navigation from "./Navigation";
import { createContext, useState } from "react";
import Navigations from "./Navigations";
export const dataContext = createContext("");
import useLocalStorage from "./LocalStorage";
import ActiveLink from "./ActiveLink";
import { motion } from "framer-motion";
import Footer from "./Footer";
import styles from "../styles/footer.module.css";
import { icons } from "./Data";
// import video from "../public/images/video.mp4"

const Layout = ({ children }) => {
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
    <dataContext.Provider value={{ icons, badge, setbadge, listedIcons }}>
      <div style={{ position: "relative" }}>
        <video
          style={{
            //  border: "5px solid red",
            width: "100%",
            height: "100%",
            position: "absolute",
            // backgroundColor:"red"
          }}
          src={""}
        ></video>

        <div
          style={{
            position: "relative",
            // border: "5px solid blue",
            minHeight: "100vh",
            // overflow: "hidden",
            zIndex: "0",
            backgroundColor: `${isdarkmode ? "black" : "transparent"}`,
          }}
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
          <div
            style={{
              // position: "sticky",
              position:"fixed",
              top: "90vh",
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
