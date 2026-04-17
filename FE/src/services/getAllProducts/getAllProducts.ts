import api from "../api/axios";

export const getAllProducts = async () => {
   try {
      const response = await api.get("/products");
      return {
         success: true,
         data: response.data.data,
      };
   } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
   }
};
