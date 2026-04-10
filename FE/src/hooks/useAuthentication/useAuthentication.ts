import { useContext } from "react";
import { AppContext } from "../../context/AppContext/AppContext";

export const useAuthentication = () => {
   const context = useContext(AppContext);
   if (!context)
      throw new Error("useAuthentication must be used within AppProvider");
   return context;
};
