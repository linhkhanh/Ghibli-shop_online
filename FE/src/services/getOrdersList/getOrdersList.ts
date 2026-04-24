import api from "../api/axios";

export const getOrdersList = async () => {
   try {
      const response = await api.get("/orders");
      return response.data;
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : String(error)}`,
      );
   }
};
