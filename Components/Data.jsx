import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import { green, yellow, red, grey, purple, blue } from "@mui/material/colors";

export const headData = [
  {
    title: "Tolani_Home",
    name: "Home",
    content: "You are Home",
    href: <HomeIcon />,
  },
  {
    title: "Tolani_About",
    name: "About",
    content: "About me",
    href: <PersonIcon />,
  },
  {
    title: "Tolani_portfolio",
    name: "portfolio",
    content: "These are my portfolio",
    href: <BusinessCenterIcon />,
  },
  {
    title: "Tolani_contact",
    name: "contact",
    content: "This is my contact",
    href: <iContactPhoneIcon />,
  },
];

export const icons = [
  {
    icon: (
      <HomeIcon
        color="secondary"
        sx={{ fonstSize: "50", color: yellow[500] }}
      />
    ),
    name: "Home",
    color: "#ffeb3b",
    link: "/",
  },

  {
    icon: (
      <PersonIcon color="success" sx={{ fonstSize: "50", color: blue[500] }} />
    ),
    name: "About",
    color: "#2196f3",
    link: "/about",
  },
  {
    icon: <BusinessCenterIcon sx={{ fonstSize: "50", color: purple[300] }} />,
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
  },
];

export const pageHeaderData = [
  {
    inner: "Resume",
    content: "About",
    span: "me",
  },
  {
    inner: "works",
    content: "my",
    span: "portfolio",
  },
  {
    inner: "contact",
    content: "get in",
    span: "touch",
  },
];
