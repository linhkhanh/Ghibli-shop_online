import api from "../api/axios";

export interface PlaceOrderPayload {
   name: string;
   email: string;
   phone: string;
   shippingAddress: string;
   paymentMethod: string;
}

export const placeOrder = async (payload: PlaceOrderPayload) => {
   const { name, email, phone, shippingAddress, paymentMethod } = payload;

   try {
      const response = await api.post("/orders", {
         name,
         email,
         phone_number: phone,
         shipping_address: shippingAddress,
         payment_method: paymentMethod,
      });
      return {
         message: response.data.message,
         orderId: response.data.orderId,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: any) {
      throw new Error(error.response?.data?.message || "Failed to place order");
   }
};
