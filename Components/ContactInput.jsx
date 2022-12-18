import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import styles from "../styles/contact.module.css";

// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "white",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "green",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "transparent",
//       backgroundColor: "rgb(34, 34, 34)",
//       borderRadius: "10px",
//       color: "white",
//     },
//     "&:hover fieldset": {
//       borderColor: "transparent",
//       color: "white",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "transparent",
//       //   color: "white",
//     },
//   },
// });

export default function ContactInput() {
  const myStyle = {
    border: "1px solid transparent",
    backgroundColor: "rgb(34, 34, 34)",
    color: "white",
    // height: "50px",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div className={styles.fieldcontainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        style={myStyle}
      />
      <input
        className={styles.input}
        type="Email"
        placeholder="Email"
        style={myStyle}
      />
      <textarea
        className={styles.input}
        type="text"
        placeholder="Message"
        style={myStyle}
        rows={"5"}
      />
    </div>
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <CssTextField id="outlined-basic" label="Name" variant="outlined" />
    //   <CssTextField id="outlined-basic" label="Email" variant="outlined" />
    //   <CssTextField
    //   color="warning"
    //     id="outlined-multiline-flexible"
    //     label="Message"
    //     multiline
    //     variant="outlined"
    //     minRows={4}
    //     defaultValue={"Type your mesage here"}
    //     // style={{ color: "white" }}
    //   />
    // </Box>
  );
}

// import * as React from 'react';

import InputBase from "@mui/material/InputBase";
// import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
// import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     width: 'auto',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const RedditTextField = styled((props) => (
//   <TextField InputProps={{ disableUnderline: true }} {...props} />
// ))(({ theme }) => ({
//   '& .MuiFilledInput-root': {
//     border: '1px solid #e2e2e1',
//     overflow: 'hidden',
//     borderRadius: 4,
//     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//     '&.Mui-focused': {
//       backgroundColor: 'transparent',
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const ValidationTextField = styled(TextField)({
//   '& input:valid + fieldset': {
//     borderColor: 'green',
//     borderWidth: 2,
//   },
//   '& input:invalid + fieldset': {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   '& input:valid:focus + fieldset': {
//     borderLeftWidth: 6,
//     padding: '4px !important', // override inline-style
//   },
// });

// export default function CustomizedInputs() {
//   return (
//     <Box
//       component="form"
//       noValidate
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr 1fr' },
//         gap: 2,
//       }}
//     >
//       <FormControl variant="standard">
//         <InputLabel shrink htmlFor="bootstrap-input">
//           Bootstrap
//         </InputLabel>
//         <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
//       </FormControl>
//       <RedditTextField
//         label="Reddit"
//         defaultValue="react-reddit"
//         id="reddit-input"
//         variant="filled"
//         style={{ marginTop: 11 }}
//       />
//       <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
//       <ValidationTextField
//         label="CSS validation style"
//         required
//         variant="outlined"
//         defaultValue="Success"
//         id="validation-outlined-input"
//       />
//     </Box>
//   );
// }
