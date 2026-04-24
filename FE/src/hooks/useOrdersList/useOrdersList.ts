import { useEffect, useState } from "react";
import type { Order } from "../../utils/dataType";
import { getOrdersList } from "../../services/getOrdersList/getOrdersList";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useOrdersList = (): { ordersList: Order[]; loading: boolean } => {
   const [ordersList, setOrdersList] = useState<Order[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const { showSnackbar } = useSnackbar();

   useEffect(() => {
      const fetchOrders = async () => {
         try {
            const orders = await getOrdersList();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formattedOrders: Order[] = orders.map((order: any) => ({
               id: order.id,
               userId: order.user_id,
               totalAmount: order.total_amount,
               status: order.status,
               createdAt: new Date(order.created_at),
            }));
            setOrdersList(formattedOrders);
         } catch (error) {
            showSnackbar(
               `Failed to fetch orders: ${error instanceof Error ? error.message : String(error)}`,
               "error",
            );
         } finally {
            setLoading(false);
         }
      };

      fetchOrders();
   }, []);

   return {
      ordersList,
      loading,
   };
};

export default useOrdersList;
