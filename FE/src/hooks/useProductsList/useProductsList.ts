import type { ProductItem } from "../../utils/dataType";
import { mockProducts } from "../../utils/mockData";

const useProductsList = (): ProductItem[] => {
   return mockProducts;
};

export default useProductsList;
