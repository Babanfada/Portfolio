import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import styles from "../styles/contact.module.css";
import styless from "../styles/detailsme.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { yellow } from "@mui/material/colors";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import AlertSnackBar from "./AlertSnackBar";
import { dataContext } from "./Layout";
import * as React from "react";
import AlertSnackBarF from "./AlertSnackBarF";

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
const myStyle = {
  border: "1px solid transparent",
  backgroundColor: "rgb(34, 34, 34)",
  color: "white",
  // height: "50px",
  borderRadius: "10px",
  padding: "10px",
};
export default function ContactInput() {
  const { handleClick, handleClickF } = React.useContext(dataContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_il36wn6",
        "template_4pjwtw2",
        form.current,
        "rVJJBkDG2xhnRnoIf"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          handleClick();
        },
        (error) => {
          console.log(error.text);
          handleClickF();
        }
      );
  };
  return (
    <form className={styles.fieldcontainer} ref={form} onSubmit={sendEmail}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        style={myStyle}
        name="name"
        id="name"
        required={"required"}
      />
      <input
        className={styles.input}
        type="Email"
        placeholder="Email"
        style={myStyle}
        name="email"
        id="email"
        required={"required"}
      />
      <textarea
        className={styles.input}
        type="text"
        placeholder="Message"
        style={myStyle}
        rows={"5"}
        name="message"
        id="message"
        minLength={20}
        required={"required"}
      />
      <a className={styless.stackbutton} title="Send Message">
        <BootstrapButton
          type="submit"
          className={styless.stackbutton}
          style={{ borderRadius: "20px", color: "white" }}
          size="large"
          variant="outlined"
          onSubmit={sendEmail}
          // startIcon={<MdOutlineEventNote />}
        >
          <SendIcon sx={{ fonstSize: "50px", color: yellow[500] }} />
        </BootstrapButton>
      </a>
      <AlertSnackBar />
      <AlertSnackBarF />
    </form>
  );
}
