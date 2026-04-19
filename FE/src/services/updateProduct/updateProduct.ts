import type { UpdateProductPayload } from "../../utils/dataType";
import api from "../api/axios";

export const updateProduct = async (payload: UpdateProductPayload) => {
   try {
      const response = await api.put(`/products/${payload.id}`, payload);
      return {
         success: true,
         message: response.data.message || "Product updated successfully",
         product: response.data.data,
      };
   } catch (error: unknown) {
      throw new Error(
         error instanceof Error ? error.message : "Failed to update product",
      );
   }
};
