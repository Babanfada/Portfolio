import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import { green, yellow, red, grey, purple, blue } from "@mui/material/colors";
import react from "../public/images/react.png";
import next from "../public/images/next.png";
import firebase from "../public/images/firebase.png";
import git from "../public/images/git.png";
import github from "../public/images/github.png";
import sass from "../public/images/sass.svg";
import Typescript from "../public/images/Typescript.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import apiaries from "../public/images/Apiaries16.png";
import homerentals from "../public/images/homerentals.png";
import lendsqr from "../public/images/lendsqr.png";
import portfolio from "../public/images/portfolio.png";
import noteapp from "../public/images/noteapp.png";
import twitter from "../public/images/twitterclone.png";
import sampleproject from "../public/images/sampleproject.png";
import jobster from "../public/images/jobster.png";
import jobio from "../public/images/jobio.png";
import jobapi from "../public/images/jobapi.png";

export const headData = [
  {
    title: "Tolani_Home",
    name: "Home",
    content: "You are Home",
    href: <HomeIcon />,
  },
  {
    title: "Tolani_Stack",
    name: "Stacks",
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
        sx={{ fonstSize: "30", color: yellow[500] }}
      />
    ),
    name: "Home",
    color: "#ffeb3b",
    link: "/",
  },

  {
    icon: (
      <PersonIcon color="success" sx={{ fonstSize: "30", color: blue[500] }} />
    ),
    name: "Stack",
    color: "#2196f3",
    link: "/stack",
  },
  {
    icon: <BusinessCenterIcon sx={{ fonstSize: "30", color: purple[300] }} />,
    name: "Portfolio",
    color: "#9c27b0",
    link: "/portfolio",
  },
  {
    icon: <ContactPhoneIcon sx={{ fonstSize: "30", color: green[500] }} />,
    name: "Contact",
    style1: "0px",
    color: "#4caf50",
    link: "/contact",
  },
  {
    icon: <LightModeIcon sx={{ fonstSize: "30", color: yellow[500] }} />,
    name: "Light",
  },
  {
    icon: <DarkModeIcon sx={{ fonstSize: "30", color: blue[500] }} />,
    name: "Dark",
  },
  {
    icon: <MenuIcon sx={{ fonstSize: "30", color: yellow[500] }} />,
    name: "Menu",
    style1: "0px",
  },
  {
    icon: <CloseIcon sx={{ fonstSize: "30", color: red[900] }} />,
    name: "",
    style: "0px",
  },
];

export const pageHeaderData = [
  {
    inner: "Resume",
    content: "My",
    span: "stack",
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

export const skills = [
  {
    image: react,
    name: "React",
    url: "https://reactjs.org/",
  },
  {
    image: sass,
    name: "Sass",
    url: "https://sass-lang.com/",
  },
  {
    image: Typescript,
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    image: next,
    name: "Next",
    url: "https://nextjs.org/",
  },
  {
    image: firebase,
    name: "Firebase",
    url: "https://firebase.google.com/",
  },
  {
    image: git,
    name: "Git",
    url: "https://git-scm.com/",
  },
  {
    image: github,
    name: "Github",
    url: "https://github.com/",
  },
];

export const contactData = [
  {
    icon: <WhatsAppIcon sx={{ fonstSize: "50", color: yellow[500] }} />,
    url: "+234703.....",
    color: "#ffeb3b",
    link: "https://api.whatsapp.com/send?phone=2347038626576&text=Hello,%20I%20am%20happy%20to%20speak%20with%20you.",
  },
  {
    icon: <LinkedInIcon sx={{ fonstSize: "50", color: blue[500] }} />,
    url: "Muhammed Kabeer Ibrahim",
    color: "#2196f3",
    link: "https://www.linkedin.com/in/muhammed-kabeer-ibrahim-97626a12b/",
  },
  {
    icon: <TwitterIcon sx={{ fonstSize: "50px", color: green[500] }} />,
    url: "@babanfada",
    color: "#4caf50",
    link: "https://twitter.com/babanfada",
  },
];

export const portfolioCardData = [
  {
    link: "https://apiaries-16.vercel.app/",
    img: apiaries,
  },
  {
    link: "https://home-rentals-lgqn.vercel.app/",
    img: homerentals,
  },
  {
    link: "https://jobs-clientside.vercel.app/",
    img: jobio,
  },
  {
    link: "https://jobs-api-users-info-api.vercel.app",
    img: jobapi,
  },
  {
    link: "https://jobs-upgraded.vercel.app/",
    img: jobster,
  },
  {
    link: "https://ibrahim-muhammed-lendsqr-fe-test.vercel.app/users",
    img: lendsqr,
  },
  {
    link: "https://portfolio-nine-nu-96.vercel.app/",
    img: portfolio,
  },
  {
    link: "https://react-applications-seven.vercel.app/",
    img: noteapp,
  },
  {
    link: "https://sample-project-babanfada.vercel.app/",
    img: sampleproject,
  },
  {
    link: "https://twiiter-clone-te3u.vercel.app/",
    img: twitter,
  },
];
