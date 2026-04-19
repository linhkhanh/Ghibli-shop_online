import api from "../api/axios";

export const deleteProduct = async (productId: number) => {
   try {
      await api.delete(`/products/${productId}`);
      return { success: true, message: "Product deleted successfully" };
   } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error(
         `Failed to delete product. Please try again. ${error instanceof Error ? error.message : "Unknown error"}`,
      );
   }
};
