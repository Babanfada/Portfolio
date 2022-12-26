import Typical from "react-typical";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import styles from "../styles/detailsme.module.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { MdOutlineEventNote } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import Link from "next/link";
//  import CV from "../public/document.pdf";
const gradient = `radial-gradient(circle, rgba(184,185,22,0.5) 0%, rgba(184,172,35,0.23) 100%)`;
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderColor: "#ffb400",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    background: gradient,
    // backgroundColor: "#ffb400",
    borderColor: "#ffb400",
    boxShadow: "none",
    color: "black",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
    borderColor: "#ffb400",
    color: "black",
    // outline: "none",
  },
  "&:focus": {
    // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[800]),
  backgroundColor: yellow[800],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));
const Detailsme = () => {
  return (
    <div className={styles.wrapperbox}>
      <div className={styles.firstbox}></div>

      <div className={styles.secondbox}>
        <h1>
          Hi <span>!!</span>{" "}
        </h1>
        <h2>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "I'm a Web developer",
              3000,
              "Experienced in",
              3000, // this delay will be applied before the next string is displayed
              "REACT.JS",
              3000,
              "NEXT.JS",
              3000,
              "FIREBASE",
              3000,
              "GIT",
              3000,
              "GITHUB",
              3000,
            ]}
          />
        </h2>

        <p>
          I am a front-end web developer with expertise in <span> ReactJS</span>
          , <span> NextJS</span> and <span> Firebase</span>. I am skilled in
          responsive design and have a passion for creating user-friendly web
          applications. I use Git for version control to manage my projects
          efficiently.
        </p>

        <div className={styles.stack} direction="row" spacing={0}>
          <a
            className={styles.stackbutton}
            title="Download CV"
            download="Curriculum Vitae"
            href={"cv.docx"}
            target={"blank"}
          >
            <BootstrapButton
              className={styles.stackbutton}
              style={{ borderRadius: "20px", color: "white" }}
              size="large"
              variant="outlined"
              startIcon={<MdOutlineEventNote />}
            >
              CV
            </BootstrapButton>
          </a>
          <Link className={styles.stackbutton} href={"/portfolio"}>
            <BootstrapButton
              className={styles.stackbutton}
              style={{ borderRadius: "20px", color: "yellow" }}
              variant="outlined"
              startIcon={<BusinessCenterIcon />}
            >
              Portfolio
            </BootstrapButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detailsme;
