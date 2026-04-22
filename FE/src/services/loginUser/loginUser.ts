import type { User } from "../../utils/dataType";
import api from "../api/axios";

interface LoginPayload {
   email: string;
   password: string;
}

export interface LoginResponse {
   success: boolean;
   message: string;
   user: User;
}

export const loginUser = async (payload: LoginPayload) => {
   const { email, password } = payload;
   try {
      const guestCartId = localStorage.getItem("ghibli_guest_cart_id");
      const response = await api.post(
         "/login",
         { email, password },
         {
            headers: {
               "X-Guest-Cart-ID": guestCartId || "",
            },
         },
      );

      localStorage.setItem("ghibli_token", response.data.access_token);
      localStorage.removeItem("ghibli_guest_cart_id");
      return {
         success: true,
         message: "Login successful!",
         user: response.data.user,
      };
   } catch (error: unknown) {
      throw new Error(
         `An unexpected error occurred during login: ${error instanceof Error ? error.message : ""}`,
      );
   }
};
