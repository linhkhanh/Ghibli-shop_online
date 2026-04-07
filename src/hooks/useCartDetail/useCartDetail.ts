import type { NewCartItem } from "../../utils/datatType";
import { mockCartItems } from "../../utils/mockData";

const useCartDetail = (): NewCartItem[] => {
   return mockCartItems;
};

export default useCartDetail;
