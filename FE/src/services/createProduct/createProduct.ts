import type { ProductPayload } from "../../utils/dataType";
import api from "../api/axios";

export const createProduct = async (payload: ProductPayload) => {
   try {
      const response = await api.post("/products", payload);
      return {
         success: true,
         message: response.data.message || "Product created successfully",
         product: response.data,
      };
   } catch (error: unknown) {
      console.error("Error creating product:", error);
      throw new Error(
         error instanceof Error ? error.message : "Failed to create product",
      );
   }
};
