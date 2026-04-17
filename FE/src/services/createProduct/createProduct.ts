import api from "../api/axios";

interface ProductPayload {
   title: string;
   description: string;
   price: number;
   stock: number;
   discount?: number;
   movie_id: number;
   images: string[];
}

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
