import React, { useState, type ReactNode } from "react";
import { Snackbar, Alert, type AlertColor } from "@mui/material";
import { SnackbarContext } from "./SnackBarContext";

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
   const [open, setOpen] = useState(false);
   const [message, setMessage] = useState("");
   const [severity, setSeverity] = useState<AlertColor>("success");

   const showSnackbar = (msg: string, sev: AlertColor = "success") => {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
   };

   const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string,
   ) => {
      if (reason === "clickaway") return;
      setOpen(false);
   };

   return (
      <SnackbarContext.Provider value={{ showSnackbar }}>
         {children}
         <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
         >
            <Alert
               onClose={handleClose}
               severity={severity}
               variant="filled"
               sx={{ width: "100%" }}
            >
               {message}
            </Alert>
         </Snackbar>
      </SnackbarContext.Provider>
   );
};
