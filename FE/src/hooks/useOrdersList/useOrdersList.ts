import type { Order } from "../../utils/dataType";
import { mockOrdersList } from "../../utils/mockData";

// TODO: Call API here to get real data
const useOrdersList = (): Order[] => {
   return mockOrdersList;
};

export default useOrdersList;
