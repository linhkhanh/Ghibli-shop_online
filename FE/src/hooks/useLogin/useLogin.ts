import { loginUser } from "../../services/loginUser/loginUser";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UserPayload {
   email: string;
   password: string;
}

const useLogin = () => {
   const { showSnackbar } = useSnackbar();
   const { updateUser } = useAuthentication();

   const login = async (payload: UserPayload) => {
      try {
         const response = await loginUser(payload);
         showSnackbar("Login successful!", "success");
         updateUser(response.user);
         window.location.reload();
         return {
            success: true,
            message: "Login successful!",
            user: response.user,
         };
      } catch (error: Error | unknown) {
         return {
            success: false,
            message: `An unexpected error occurred during login ${error instanceof Error ? error.message : ""}`,
            user: null,
         };
      }
   };

   return { login };
};

export default useLogin;
