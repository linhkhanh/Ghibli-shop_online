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
      const response = await api.post("/register", payload);
      localStorage.setItem("ghibli_token", response.data.access_token);
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
