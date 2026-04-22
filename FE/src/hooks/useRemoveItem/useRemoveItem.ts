import { removeCartItem } from "../../services/removeItem/removeItem";
import type { CartInfo } from "../../utils/dataType";
import { useAuthentication } from "../useAuthentication/useAuthentication";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface RemoveItemProps {
   itemId: number;
   setCartInfo: React.Dispatch<React.SetStateAction<CartInfo>>;
   cartInfo: CartInfo;
}

const useRemoveItem = () => {
   const { showSnackbar } = useSnackbar();
   const { updateCart } = useAuthentication();

   const removeItem = async ({
      itemId,
      setCartInfo,
      cartInfo,
   }: RemoveItemProps) => {
      try {
         const { message } = await removeCartItem(itemId);
         showSnackbar(message, "success");
         setCartInfo((prev: CartInfo) => ({
            ...prev,
            items: prev.items.filter((item) => item.id !== itemId),
         }));
         const totalItems = cartInfo.items.reduce(
            (sum, item) => sum + (item.id === itemId ? 0 : item.quantity),
            0,
         );
         updateCart(totalItems);
      } catch (error) {
         showSnackbar(
            `Failed to remove item: ${error instanceof Error ? error.message : "Unknown error"}`,
            "error",
         );
      }
   };

   return { removeItem };
};

export default useRemoveItem;
