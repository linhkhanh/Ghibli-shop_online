import { useEffect, useState, type ReactNode, type FC } from "react";
import { AppContext, type AppContextType } from "./AppContext";
import type { CartItem } from "../../utils/datatType";

type AppProviderProps = {
   children: ReactNode;
};

// TODO: remove this func when connecting database
const getStoredCartItems = (): CartItem[] => {
   if (typeof window === "undefined") return [];
   const stored = window.localStorage.getItem("cartItems");
   if (!stored) return [];

   try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((item) => ({
         productId: item.productId,
         price: item.price,
         discount: item.discount,
         title: item.title,
      }));
   } catch {
      return [];
   }
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
   const initialCartItems = getStoredCartItems();
   const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

   useEffect(() => {
      if (typeof window === "undefined") return;
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);

   const updateCart = (items: CartItem[]) => {
      setCartItems(items);
      window.localStorage.setItem("cartItems", JSON.stringify(items));
   };

   const value: AppContextType = {
      cartItems,
      updateCart,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
