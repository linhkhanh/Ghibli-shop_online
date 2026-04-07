import type { OrderItem } from "../../utils/dataType";
import { mockOrderItems } from "../../utils/mockData";

// TODO: Call API here to get order detail by id
const useOrderDetail = (): OrderItem[] => {
   return mockOrderItems;
};

export default useOrderDetail;
