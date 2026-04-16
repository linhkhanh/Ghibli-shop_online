import { useState, type ReactNode, type FC, useEffect } from "react";
import { AppContext, type AppContextType } from "./AppContext";
import type { CartItem, User } from "../../utils/dataType";
import { mockCartItems } from "../../utils/mockData";
import api from "../../services/api/axios";

type AppProviderProps = {
   children: ReactNode;
};

interface UserCartInfo {
   user: User | null;
   cartItems: CartItem[];
}

// TODO: Get real data from call API here
// get UserInfo here
// Get CartItems by userId
// without userId, get cartItems from localStorage or set to empty array
const getUserInfoAndCart = (): UserCartInfo => {
   return {
      user: null,
      cartItems: mockCartItems,
   };
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
   const initialUserInfo = getUserInfoAndCart();

   const [cartCount, setCartCount] = useState<number>(
      initialUserInfo.cartItems.length,
   );
   const [user, setUser] = useState<User | null>(initialUserInfo.user);

   const updateCart = (cartCount: number) => {
      setCartCount(cartCount);
   };

   const updateUser = (user: User | null) => {
      setUser(user);
   };

   const value: AppContextType = {
      cartCount,
      updateCart,
      user,
      updateUser,
   };

   useEffect(() => {
      api.get("/user") // A default Laravel route
         .then((res) => console.log("Connected to Backend!", res.data))
         .catch((err) => console.log("Connection failed", err));
   }, []);

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
