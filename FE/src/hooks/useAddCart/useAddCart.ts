import { addCart, type AddCartPayload } from "../../services/addCart/addCart";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useAddCart = () => {
   const { showSnackbar } = useSnackbar();
   const { updateCart } = useAuthentication();
   const addToCart = async (payload: AddCartPayload) => {
      try {
         const { message, cart } = await addCart(payload);
         showSnackbar(message, "success");
         const countItems = cart.items.reduce(
            (total: number, item: { quantity: number }) =>
               total + item.quantity,
            0,
         );
         updateCart(countItems);
      } catch (error: unknown) {
         showSnackbar(
            `Failed to add item to cart: ${error instanceof Error ? error.message : "Unknown error"}`,
            "error",
         );
      }
   };

   return { addToCart };
};

export default useAddCart;
