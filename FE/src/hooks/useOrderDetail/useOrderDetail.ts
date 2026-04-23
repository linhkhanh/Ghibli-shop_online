import { useEffect, useState } from "react";
import type { OrderItem } from "../../utils/dataType";
import { getOrderDetail } from "../../services/getOrderDetail/getOrderDetail";

const useOrderDetail = (orderId: number) => {
   const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
   const [orderInfo, setOrderInfo] = useState({
      phone: "",
      shippingAddress: "",
      name: "",
      email: "",
   });
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchOrderDetail = async () => {
         try {
            const res = await getOrderDetail(orderId);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formattedItems: OrderItem[] = res.items.map((item: any) => ({
               id: item.id,
               orderId: item.order_id,
               status: res.status,
               quantity: item.quantity,
               productId: item.product_id,
               title: item.product.title,
               price: item.price,
               discount: item.product.discount,
               imageUrl: item.product.images[0].image,
            }));
            setOrderItems(formattedItems);
            setOrderInfo({
               phone: res.phone_number,
               shippingAddress: res.shipping_address,
               name: res.name,
               email: res.email,
            });
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchOrderDetail();
   }, [orderId]);

   return {
      orderItems,
      loading,
      orderInfo,
   };
};

export default useOrderDetail;
