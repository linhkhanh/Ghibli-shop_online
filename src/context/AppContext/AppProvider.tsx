import { useState, type ReactNode, type FC } from "react";
import { AppContext, type AppContextType } from "./AppContext";

type AppProviderProps = {
   children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
   const [cartCount, setCartCount] = useState<number>(0);

   const updateCart = (count: number) => {
      setCartCount(count);
   };

   const value: AppContextType = {
      cartCount,
      updateCart,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
