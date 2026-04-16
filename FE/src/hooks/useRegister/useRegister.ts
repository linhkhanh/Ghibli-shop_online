import { registerUser } from "../../services/registerUser/registerUser";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UserPayload {
   name: string;
   email: string;
   password: string;
   confirmedPassword: string;
}

const useRegister = () => {
   const { showSnackbar } = useSnackbar();

   const createUser = async (payload: UserPayload) => {
      try {
         const response = await registerUser({
            ...payload,
            password_confirmation: payload.confirmedPassword,
         });

         if (response.success) {
            showSnackbar("Registration successful!", "success");
         } else {
            showSnackbar(response.message || "Registration failed", "error");
         }
      } catch (error: Error | unknown) {
         showSnackbar(
            `An unexpected error occurred during registration ${error instanceof Error ? error.message : ""}`,
            "error",
         );
      }
   };

   return { createUser };
};

export default useRegister;
