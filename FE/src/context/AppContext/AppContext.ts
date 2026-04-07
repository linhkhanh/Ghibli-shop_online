import { createContext } from "react";

export type AppContextType = {
   cartCount: number;
   updateCart: (cartCount: number) => void;
};

export const AppContext = createContext<AppContextType>({
   cartCount: 0,
   updateCart: () => {},
});
