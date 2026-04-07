import type { CartItem } from "../../utils/datatType";
import { mockCartItems } from "../../utils/mockData";

// TODO: call API here
const useCartDetail = (): CartItem[] => {
   return mockCartItems;
};

export default useCartDetail;
