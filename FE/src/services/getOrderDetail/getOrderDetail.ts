import api from "../api/axios";

export const getOrderDetail = async (orderId: number) => {
   try {
      const res = await api.get(`/orders/${orderId}`);
      return res.data;
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : String(error)}`,
      );
   }
};
