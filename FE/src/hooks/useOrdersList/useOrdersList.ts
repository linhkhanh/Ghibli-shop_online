import type { Order } from "../../utils/datatType";
import { mockOrdersList } from "../../utils/mockData";

// TODO: Call API here to get real data
const useOrdersList = (): Order[] => {
   return mockOrdersList;
};

export default useOrdersList;
