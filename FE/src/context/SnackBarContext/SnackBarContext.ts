import type { AlertColor } from "@mui/material";
import { createContext } from "react";

export interface SnackbarContextType {
   showSnackbar: (message: string, severity?: AlertColor) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
   showSnackbar: () => {},
});
