import api from "../api/axios";

export const getAllProducts = async (page: number) => {
   try {
      const response = await api.get(`/products?page=${page}`);
      return {
         success: true,
         data: response.data.data.data,
         lastPage: response.data.data.last_page,
      };
   } catch (error) {
      throw new Error(
         error instanceof Error ? error.message : "Failed to fetch products",
      );
   }
};
