import api from "../api/axios";

interface UpdateCartItemPayload {
   itemId: number;
   quantity: number;
}
export const updateCartItem = async ({
   itemId,
   quantity,
}: UpdateCartItemPayload) => {
   try {
      const response = await api.patch(
         `/cart/items/${itemId}`,
         { quantity },
         {
            headers: {
               "X-Guest-Cart-ID":
                  localStorage.getItem("ghibli_guest_cart_id") || "",
            },
         },
      );
      return {
         message: response.data.message,
         updatedItem: response.data.item,
      };
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : "Unknown error"}`,
      );
   }
};
