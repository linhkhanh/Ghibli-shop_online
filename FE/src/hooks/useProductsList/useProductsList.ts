import type { ProductItem } from "../../utils/dataType";
import { getAllProducts } from "../../services/getAllProducts/getAllProducts";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useProductsList = () => {
   const { showSnackbar } = useSnackbar();
   const getProducts = async (
      page: number,
   ): Promise<{ products: ProductItem[]; lastPage: number }> => {
      try {
         const { data, lastPage } = await getAllProducts(page);

         const formattedProducts: ProductItem[] = data.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (product: any) => ({
               id: product.id,
               title: product.title,
               price: product.price,
               description: product.description,
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               images: product.images.map((img: any) => img.image),
               movieId: product.movie_id,
               discount: product.discount,
               stock: product.stock,
            }),
         );

         return {
            products: formattedProducts,
            lastPage,
         };
      } catch (error: Error | unknown) {
         showSnackbar(
            `Error fetching products: ${error instanceof Error ? error.message : "Failed to fetch products"}`,
            "error",
         );
         return { products: [], lastPage: 0 };
      }
   };

   return { getProducts };
};

export default useProductsList;
