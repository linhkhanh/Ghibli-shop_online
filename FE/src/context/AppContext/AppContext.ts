import { createContext } from "react";
import type { User } from "../../utils/dataType";

export type AppContextType = {
   cartCount: number;
   updateCart: (cartCount: number) => void;
   user: User;
   updateUser: (user: User) => void;
};

export const AppContext = createContext<AppContextType>({
   cartCount: 0,
   updateCart: () => {},
   user: { id: "", name: "", email: "" },
   updateUser: () => {},
});
