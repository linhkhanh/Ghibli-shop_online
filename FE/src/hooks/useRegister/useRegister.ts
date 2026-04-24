import { registerUser } from "../../services/registerUser/registerUser";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UserPayload {
   name: string;
   email: string;
   password: string;
   confirmedPassword: string;
}

const useRegister = () => {
   const { showSnackbar } = useSnackbar();
   const { updateUser } = useAuthentication();

   const createUser = async (payload: UserPayload) => {
      try {
         const response = await registerUser({
            ...payload,
            password_confirmation: payload.confirmedPassword,
         });

         showSnackbar("Registration successful!", "success");
         updateUser(response.user);
         window.location.reload();
      } catch (error: Error | unknown) {
         showSnackbar(
            `${error instanceof Error ? error.message : ""}`,
            "error",
         );
      }
   };

   return { createUser };
};

export default useRegister;
