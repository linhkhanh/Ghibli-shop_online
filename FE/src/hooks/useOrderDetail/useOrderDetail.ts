import { getRandomItem } from "../../utils/common";
import type { OrderItem } from "../../utils/dataType";
import { mockOrderItems } from "../../utils/mockData";

// TODO: Call API here to get order detail by id
const useOrderDetail = (): OrderItem => {
   return getRandomItem<OrderItem>(mockOrderItems) || mockOrderItems[0];
};

export default useOrderDetail;
