import { createContext } from "react";
import type { CartItem } from "../../utils/datatType";

export type AppContextType = {
   cartItems: CartItem[];
   updateCart: (items: CartItem[]) => void;
};

export const AppContext = createContext<AppContextType>({
   cartItems: [],
   updateCart: () => {},
});
