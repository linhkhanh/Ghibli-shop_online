import { useState, type ReactNode, type FC } from "react";
import { AppContext, type AppContextType } from "./AppContext";
import type { CartItem, User } from "../../utils/dataType";
import { mockCartItems, mockUser } from "../../utils/mockData";

type AppProviderProps = {
   children: ReactNode;
};

interface UserInfo extends User {
   cartItems: CartItem[];
}

// TODO: Get real data from call API here
const getUserInfoAndCart = (): UserInfo => {
   return {
      ...mockUser,
      cartItems: mockCartItems,
   };
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
   const initialUserInfo = getUserInfoAndCart();

   const [cartCount, setCartCount] = useState<number>(
      initialUserInfo.cartItems.length,
   );
   const [user, setUser] = useState<User>(initialUserInfo);

   const updateCart = (cartCount: number) => {
      setCartCount(cartCount);
   };

   const updateUser = (user: User) => {
      setUser(user);
   };

   const value: AppContextType = {
      cartCount,
      updateCart,
      user,
      updateUser,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
