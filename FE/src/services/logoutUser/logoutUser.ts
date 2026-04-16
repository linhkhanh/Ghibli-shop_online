import api from "../api/axios";

export const logoutUser = async () => {
   try {
      await api.post("/logout");
   } catch (error) {
      throw new Error(
         `Logout failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
   }
};
