import { useEffect, useState } from "react";
import { getProductsByMovieId } from "../../services/getProductsByMovieId/getProductByMovieId";
import type { ProductByCategory } from "../../utils/dataType";
import { useSnackbar } from "../useSnackBar/useSnackBar";

interface UseProductsByMovieProps {
   movieId: number;
   page?: number;
   limit?: number;
}

const useProductsByMovie = ({
   movieId,
   page,
   limit = 12,
}: UseProductsByMovieProps) => {
   const [products, setProducts] = useState<ProductByCategory[]>([]);
   const [lastPage, setLastPage] = useState<number>(1);
   const [loading, setLoading] = useState<boolean>(true);
   const { showSnackbar } = useSnackbar();

   useEffect(() => {
      const fetchProductsByMovieId = async () => {
         try {
            setLoading(true);
            const { data, lastPage, success } = await getProductsByMovieId({
               movieId: String(movieId),
               limit,
               page: page || 1,
            });

            if (success) {
               const formattedProducts: ProductByCategory[] = data.map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (product: any) => ({
                     id: product.id,
                     title: product.title,
                     price: product.price,
                     description: product.description,
                     // eslint-disable-next-line @typescript-eslint/no-explicit-any
                     images: product.images.map((img: any) => img.image),
                     movieId: product.movie_id,
                     movieTitle: product.movie.title,
                     movieImg: product.movie.image,
                     discount: product.discount,
                     stock: product.stock,
                  }),
               );
               setProducts(formattedProducts);
               setLastPage(lastPage);
            }
         } catch (error) {
            showSnackbar(
               `Failed to fetch products: ${error instanceof Error ? error.message : "Unknown error"}`,
               "error",
            );
         } finally {
            setLoading(false);
         }
      };
      fetchProductsByMovieId();
   }, [movieId, page, limit]);

   return { products, lastPage, loading };
};

export default useProductsByMovie;
