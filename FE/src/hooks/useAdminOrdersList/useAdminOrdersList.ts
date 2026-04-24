import { useEffect, useState } from "react";
import type { Order } from "../../utils/dataType";
import { adminOrdersList } from "../../services/adminOrdersList/adminOrdersList";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useAdminOrdersList = () => {
   const [orders, setOrders] = useState<Order[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const { showSnackbar } = useSnackbar();

   useEffect(() => {
      const fetchAdminOrders = async () => {
         try {
            const res = await adminOrdersList();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formattedOrders: Order[] = res.orders.map((order: any) => ({
               id: order.id,
               userId: order.user_id,
               totalAmount: order.total_amount,
               status: order.status,
               createdAt: new Date(order.created_at).toLocaleDateString(),
               paymentMethod: order.payment_method,
            }));
            console.log("Fetched admin orders:", formattedOrders);
            setOrders(formattedOrders);
         } catch (error) {
            showSnackbar(
               `Failed to fetch admin orders: ${error instanceof Error ? error.message : String(error)}`,
               "error",
            );
         } finally {
            setLoading(false);
         }
      };

      fetchAdminOrders();
   }, []);

   return {
      orders,
      loading,
   };
};

export default useAdminOrdersList;
