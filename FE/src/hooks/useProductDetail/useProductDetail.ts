import { getProductDetail } from "../../services/getProductDetail/getProductDetail";
import type { ProductItem } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useProductDetail = () => {
   const { showSnackbar } = useSnackbar();
   const getProductById = async (id: number): Promise<ProductItem | null> => {
      try {
         const { data: product } = await getProductDetail(id);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         const images = product.images.map((img: any) => img.image);
         return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discount: product.discount,
            images,
            movieId: product.movie_id,
            stock: product.stock,
         };
      } catch (error) {
         console.error("Error fetching product details:", error);
         showSnackbar(
            "Failed to fetch product details. Please try again.",
            "error",
         );
         return null;
      }
   };
   return { getProductById };
};
export default useProductDetail;
