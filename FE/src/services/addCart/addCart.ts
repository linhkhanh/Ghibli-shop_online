import api from "../api/axios";

export interface AddCartPayload {
   productId: number;
   quantity: number;
}

export const addCart = async (payload: AddCartPayload) => {
   const { productId, quantity } = payload;
   const guestCartId = localStorage.getItem("ghibli_guest_cart_id");
   try {
      const response = await api.post(
         "/cart/add",
         { product_id: productId, quantity },
         {
            headers: {
               "X-Guest-Cart-ID": guestCartId,
            },
         },
      );

      const guestCartIdFromResponse = response.headers["X-Guest-Cart-ID"];

      if (!guestCartId) {
         localStorage.setItem("ghibli_guest_cart_id", guestCartIdFromResponse);
      }
      return {
         success: true,
         message: response.data.message || "Item added to cart successfully",
         cart: response.data.cart,
      };
   } catch (error) {
      throw new Error(
         error instanceof Error ? error.message : "Failed to add item to cart",
      );
   }
};
