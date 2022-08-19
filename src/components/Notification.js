import React from "react";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
function Notification({ type, message, open = false }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <>
      {open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </>
  );
}

export default Notification;
