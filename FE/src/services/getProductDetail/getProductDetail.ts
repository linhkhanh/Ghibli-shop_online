import api from "../api/axios";

export const getProductDetail = async (productId: number) => {
   try {
      const response = await api.get(`/products/${productId}`);
      return {
         success: true,
         data: response.data.data,
      };
   } catch (error: unknown) {
      throw new Error(
         error instanceof Error
            ? error.message
            : "Failed to fetch product details",
      );
   }
};
