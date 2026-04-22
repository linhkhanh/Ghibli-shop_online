import { logoutUser } from "../../services/logoutUser/logoutUser";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useLogout = () => {
   const { showSnackbar } = useSnackbar();
   const { updateUser } = useAuthentication();
   const logout = async () => {
      try {
         await logoutUser();
         updateUser(null);
         showSnackbar("Logout successful!", "success");
      } catch (error: unknown) {
         showSnackbar(
            `An unexpected error occurred during logout ${error instanceof Error ? error.message : ""}`,
            "error",
         );
      }
   };

   return { logout };
};

export default useLogout;
