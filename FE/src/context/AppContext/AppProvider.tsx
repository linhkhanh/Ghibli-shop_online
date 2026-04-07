import { useState, type ReactNode, type FC } from "react";
import { AppContext, type AppContextType } from "./AppContext";
import type { CartItem } from "../../utils/dataType";
import { mockCartItems } from "../../utils/mockData";

type AppProviderProps = {
   children: ReactNode;
};

// TODO: Get real data from call API here
const getStoredCartItems = (): CartItem[] => {
   return mockCartItems;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
   const initialCartItems = getStoredCartItems();
   const [cartCount, setCartCount] = useState<number>(initialCartItems.length);

   const updateCart = (cartCount: number) => {
      setCartCount(cartCount);
   };

   const value: AppContextType = {
      cartCount: cartCount,
      updateCart,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
