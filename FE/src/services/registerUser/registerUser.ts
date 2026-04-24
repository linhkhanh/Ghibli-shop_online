import type { RegisterResponse } from "../../utils/dataType";
import api from "../api/axios";

export interface RegisterPayload {
   name: string;
   email: string;
   password: string;
   password_confirmation: string;
}

export const registerUser = async (
   payload: RegisterPayload,
): Promise<RegisterResponse> => {
   try {
      const guestCartId = localStorage.getItem("ghibli_guest_cart_id");
      const response = await api.post("/register", payload, {
         headers: {
            "X-Guest-Cart-ID": guestCartId || "",
         },
      });
      localStorage.setItem("ghibli_token", response.data.access_token);
      localStorage.removeItem("ghibli_guest_cart_id");
      return {
         success: true,
         message: "Registration successful!",
         user: response.data.user,
      };
   } catch (error: unknown) {
      throw new Error(
         `Registration failed: ${JSON.stringify(error instanceof Error ? error.message : "")}`,
      );
   }
};
