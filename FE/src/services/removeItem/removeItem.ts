import api from "../api/axios";

export const removeCartItem = async (itemId: number) => {
   try {
      const response = await api.delete(`/cart/items/${itemId}`, {
         headers: {
            "X-Guest-Cart-ID":
               localStorage.getItem("ghibli_guest_cart_id") || "",
         },
      });
      return {
         message: response.data.message,
      };
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : "Unknown error"}`,
      );
   }
};
