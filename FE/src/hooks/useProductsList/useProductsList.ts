import type { ProductItem } from "../../utils/dataType";
import { getAllProducts } from "../../services/getAllProducts/getAllProducts";
import { useSnackbar } from "../useSnackBar/useSnackBar";

const useProductsList = () => {
   const { showSnackbar } = useSnackbar();
   const getProducts = async (): Promise<ProductItem[]> => {
      try {
         const products = await getAllProducts();

         const formattedProducts: ProductItem[] = products.data.map(
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

         return formattedProducts;
      } catch (error) {
         showSnackbar(
            `Error fetching products, using mock data: ${error}`,
            "error",
         );
         return [];
      }
   };

   return { getProducts };
};

export default useProductsList;
