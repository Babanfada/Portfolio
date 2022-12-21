import * as React from "react";
import useContext from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { dataContext } from "./Layout";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSnackBarF() {
  const { openF, handleCloseF } = React.useContext(dataContext);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={openF} autoHideDuration={6000} onClose={handleCloseF}>
        <Alert onClose={handleCloseF} severity="error" sx={{ width: "100%" }}>
          There is an Error, Message not sent!!!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
