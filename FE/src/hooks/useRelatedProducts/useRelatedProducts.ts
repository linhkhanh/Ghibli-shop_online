import { getRandomItem } from "../../utils/common";
import type { ProductItem, ProductsByCategory } from "../../utils/dataType";
import { mockProductsByMovie } from "../../utils/mockData";

// TODO: Call API here to get real data, get product by movieID
const useRelatedProducts: () => ProductsByCategory = () => {
   return (
      getRandomItem<ProductsByCategory>(mockProductsByMovie) || {
         movie: {
            id: "",
            name: "",
            img: "",
         },
         products: [] as ProductItem[],
      }
   );
};

export default useRelatedProducts;
