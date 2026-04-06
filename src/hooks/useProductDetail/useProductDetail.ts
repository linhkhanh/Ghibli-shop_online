import { mockProducts } from "../../utils/mockData";

// TODO: add logic to fetch data
const useProductDetail = (productId: string) => {
   console.log(productId);
   return mockProducts[0];
};
export default useProductDetail;
