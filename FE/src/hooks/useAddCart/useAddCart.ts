import { useState } from "react";
import { addCart, type AddCartPayload } from "../../services/addCart/addCart";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useAddCart = () => {
   const { showSnackbar } = useSnackbar();
   const { updateCart } = useAuthentication();
   const [loading, setLoading] = useState<boolean>(false);

   const addToCart = async (payload: AddCartPayload) => {
      setLoading(true);
      try {
         const { message, cart } = await addCart(payload);
         const countItems = cart.items.reduce(
            (total: number, item: { quantity: number }) =>
               total + item.quantity,
            0,
         );
         if (cart.items.length > 0) {
            updateCart(countItems);
            showSnackbar(message, "success");
         }
      } catch (error: unknown) {
         showSnackbar(
            `Cannot add item to cart: ${error instanceof Error ? error.message : "Unknown error"}`,
            "error",
         );
      } finally {
         setLoading(false);
      }
   };

   return { addToCart, loading };
};

export default useAddCart;
