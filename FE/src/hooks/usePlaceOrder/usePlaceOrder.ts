import {
   placeOrder,
   type PlaceOrderPayload,
} from "../../services/placeOrder/placeOrder";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const usePlaceOrder = () => {
   const { showSnackbar } = useSnackbar();
   const checkoutOrder = async (payload: PlaceOrderPayload) => {
      try {
         const res = await placeOrder(payload);
         showSnackbar(res.message, "success");
         window.location.reload();
         return res.orderId;
      } catch (error) {
         showSnackbar(
            error instanceof Error ? error.message : "Failed to place order",
            "error",
         );
      }
   };

   return { checkoutOrder };
};

export default usePlaceOrder;
