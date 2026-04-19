import { logoutUser } from "../../services/logoutUser/logoutUser";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useLogout = () => {
   const { showSnackbar } = useSnackbar();
   const { updateUser } = useAuthentication();
   const logout = async () => {
      try {
         await logoutUser();
      } catch (error: unknown) {
         showSnackbar(
            `An unexpected error occurred during logout ${error instanceof Error ? error.message : ""}`,
            "error",
         );
      } finally {
         // Clear the token from localStorage to log the user out on the client side
         localStorage.removeItem("token");
         updateUser(null);
         showSnackbar("Logout successful!", "success");
      }
   };

   return { logout };
};

export default useLogout;
