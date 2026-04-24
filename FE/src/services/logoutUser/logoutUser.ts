import api from "../api/axios";

export const logoutUser = async () => {
   try {
      await api.post("/logout");
      localStorage.removeItem("ghibli_token");
   } catch (error) {
      throw new Error(
         `Logout failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
   }
};
