import { useEffect, useState } from "react";
import { getCartItems } from "../../services/getCartItems/getCartItems";
import type { CartInfo, CartItem } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UseCartDetailReturn {
   cartInfo: CartInfo;
   loading: boolean;
   setCartInfo: React.Dispatch<React.SetStateAction<CartInfo>>;
}

const useCartDetail = (): UseCartDetailReturn => {
   const [cartInfo, setCartInfo] = useState<CartInfo>({
      cartId: 0,
      items: [],
      totalPrice: 0,
   });
   const [loading, setLoading] = useState<boolean>(true);
   const { showSnackbar } = useSnackbar();

   useEffect(() => {
      const fetchCartDetails = async () => {
         try {
            setLoading(true);
            const { cartId, items, totalPrice } = await getCartItems();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formattedItems: CartItem[] = items.map((item: any) => ({
               id: item.id,
               productId: item.product_id,
               title: item.product.title,
               price: item.product.price,
               discount: item.product.discount,
               quantity: item.quantity,
               cartId,
               imageUrl:
                  item.product.images && item.product.images.length > 0
                     ? item.product.images[0].image
                     : "",
            }));
            console.log("Fetched cart details:", {
               cartId,
               items: formattedItems,
               totalPrice,
            });
            setCartInfo({
               cartId,
               items: formattedItems,
               totalPrice,
            });
         } catch (error) {
            showSnackbar(
               `Failed to fetch cart details: ${error instanceof Error ? error.message : "Unknown error"}`,
               "error",
            );
         } finally {
            setLoading(false);
         }
      };

      fetchCartDetails();
   }, []);

   return {
      cartInfo,
      loading,
      setCartInfo,
   };
};

export default useCartDetail;
