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
      api.get("/user")
         .then((res) => {
            setUser(res.data);
         })
         .catch((err) => console.log("Connection failed", err));

      const guestCartId = localStorage.getItem("ghibli_guest_cart_id");

      api.get("/cart", {
         headers: {
            "X-Guest-Cart-ID": guestCartId,
         },
      })
         .then((res) => {
            const items = res.data.items || [];
            setCartCount(
               items.reduce(
                  (total: number, item: CartItem) => total + item.quantity,
                  0,
               ),
            );
         })
         .catch((err) => console.log("Connection failed", err));
   }, []);

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
