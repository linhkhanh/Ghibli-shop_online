import api from "../api/axios";

export const adminOrdersList = async () => {
   try {
      const res = await api.get("/admin/orders");
      return {
         orders: res.data,
      };
   } catch (error) {
      throw new Error(
         `${error instanceof Error ? error.message : String(error)}`,
      );
   }
};
