import { useState, type Dispatch, type SetStateAction } from "react";
import { updateCartItem } from "../../services/updateCartItem/updateCartItem";
import type { CartInfo } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";
import { useAuthentication } from "../useAuthentication/useAuthentication";

interface EditCartItemProps {
   cartInfo: CartInfo;
   setCartInfo: Dispatch<SetStateAction<CartInfo>>;
   cartItemId: number;
   newQuantity: number;
}

const useUpdateCartItem = () => {
   const { showSnackbar } = useSnackbar();
   const { updateCart } = useAuthentication();
   const [loading, setLoading] = useState<boolean>(true);

   const editCartItem = async ({
      setCartInfo,
      cartItemId,
      newQuantity,
      cartInfo,
   }: EditCartItemProps) => {
      try {
         const { message, updatedItem } = await updateCartItem({
            itemId: cartItemId,
            quantity: newQuantity,
         });

         setCartInfo((prev: CartInfo) => ({
            ...prev,
            items: prev.items.map((item) =>
               item.id === cartItemId
                  ? { ...item, quantity: updatedItem.quantity }
                  : item,
            ),
         }));

         const totalItems = cartInfo.items.reduce(
            (sum, item) =>
               sum + (item.id === cartItemId ? newQuantity : item.quantity),
            0,
         );
         updateCart(totalItems);
         showSnackbar(message, "success");
      } catch (error) {
         if (error instanceof Error) {
            if (error.message == "Request failed with status code 422") {
               return showSnackbar(
                  `Failed to update cart item: Quantity exceeds available stock`,
                  "error",
               );
            }
         }
         return showSnackbar(
            `Failed to update cart item: ${error instanceof Error ? error.message : "Unknown error"}`,
            "error",
         );
      } finally {
         setLoading(false);
      }
      return { loading };
   };

   return { editCartItem };
};

export default useUpdateCartItem;
