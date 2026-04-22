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
      const response = await api.post("/login", { email, password });
      localStorage.setItem("ghibli_token", response.data.access_token);
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
