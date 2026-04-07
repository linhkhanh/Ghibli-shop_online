import type { CartItem } from "../../utils/dataType";
import { mockCartItems } from "../../utils/mockData";

// TODO: call API here
const useCartDetail = (): CartItem[] => {
   return mockCartItems;
};

export default useCartDetail;
