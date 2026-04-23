import { useState } from "react";
import { useSnackbar } from "../useSnackBar/useSnackBar";
import type { OrderStatus } from "../../utils/dataType";
import { updateOrderStatus } from "../../services/updateOrderStatus/updateOrderStatus";

const useUpdateOrderStatus = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const { showSnackbar } = useSnackbar();

   const adminUpdateOrderStatus = async (
      orderId: number,
      newStatus: string,
   ) => {
      setLoading(true);
      try {
         const response = await updateOrderStatus({
            orderId,
            status: newStatus as OrderStatus,
         });
         showSnackbar(response.message, "success");
         window.location.reload(); // Refresh the page to show updated status
         return response.updatedOrder;
      } catch (error) {
         showSnackbar(
            `Failed to update order status: ${
               error instanceof Error ? error.message : String(error)
            }`,
            "error",
         );
      } finally {
         setLoading(false);
      }
   };

   return { adminUpdateOrderStatus, loading };
};

export default useUpdateOrderStatus;
