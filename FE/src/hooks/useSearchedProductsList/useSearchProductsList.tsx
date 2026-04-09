import type { ProductItem } from "../../utils/dataType";
import { mockProducts } from "../../utils/mockData";

interface UseSearchedProductsListProps {
   keyword: string;
}
// TODO: Implement the logic to fetch products based on the search keyword. For now, we will return the mock products list.
const useSearchedProductsList = ({
   keyword,
}: UseSearchedProductsListProps): ProductItem[] => {
   console.log("Search keyword:", keyword);
   // For now, we will return the mock products list. In a real application, you would fetch this data from an API based on the search keyword.
   return mockProducts;
};

export default useSearchedProductsList;
