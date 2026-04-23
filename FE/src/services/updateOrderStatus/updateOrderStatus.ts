import type { OrderStatus } from "../../utils/dataType";
import api from "../api/axios";

interface UpdateOrderStatusPayload {
   status: OrderStatus;
   orderId: number;
}

export const updateOrderStatus = async (payload: UpdateOrderStatusPayload) => {
   const { orderId, status } = payload;
   try {
      const response = await api.patch(`/orders/${orderId}/status`, {
         status,
      });
      return {
         message: response.data.message,
         updatedOrder: response.data.order,
      };
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : String(error)}`,
      );
   }
};
