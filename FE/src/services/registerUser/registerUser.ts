import api from "../api/axios";

export interface RegisterPayload {
   name: string;
   email: string;
   password: string;
   password_confirmation: string;
}

export interface RegisterResponse {
   success: boolean;
   message: string;
   user?: {
      id: string;
      name: string;
      email: string;
      role: string;
      address: string;
      phone: string;
      created_at: string;
      updated_at: string;
   };
}

export const registerUser = async (
   payload: RegisterPayload,
): Promise<RegisterResponse> => {
   try {
      const response = await api.post("/register", payload);
      // Save the token so the user stays logged in
      localStorage.setItem("token", response.data.access_token);
      return {
         success: true,
         message: "Registration successful",
         user: response.data.user,
      };
   } catch (error: unknown) {
      throw new Error(
         `Registration failed: ${JSON.stringify(error.response?.data.errors)}`,
      );
   }
};
