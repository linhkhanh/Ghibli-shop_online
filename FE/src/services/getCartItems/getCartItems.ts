import api from "../api/axios";

export const getCartItems = async () => {
   const guestCartId = localStorage.getItem("ghibli_guest_cart_id");

   try {
      const response = await api.get("/cart", {
         headers: {
            "X-Guest-Cart-ID": guestCartId,
         },
      });
      return {
         items: response.data.items || [],
         totalPrice: response.data.total_price || 0,
         cartId: response.data.cart_id || null,
         message: response.data.message || null,
      };
   } catch (error) {
      throw new Error(
         error instanceof Error ? error.message : "Failed to fetch cart items",
      );
   }
};
