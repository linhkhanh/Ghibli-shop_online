import { useEffect, useRef, useState } from "react";
import { searchByKeyword } from "../../services/searchByKeyword/searchByKeyword";
import type { ProductItem } from "../../utils/dataType";

interface UseSearchByKeywordProps {
   keyword: string;
}

const useSearchByKeyword = (props: UseSearchByKeywordProps) => {
   const { keyword } = props;
   const [products, setProducts] = useState<ProductItem[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [lastPage, setLastPage] = useState<number>(1);
   const [page, setPage] = useState<number>(1);
   const prevKeyword = useRef<string | null>(null);

   useEffect(() => {
      if (prevKeyword.current !== null && prevKeyword.current !== keyword) {
         setPage(1);
      }
      prevKeyword.current = keyword;
   }, [keyword]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            setLoading(true);
            const { data, lastPage, success } = await searchByKeyword({
               keyword,
               page,
            });

            if (success) {
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
               setProducts(formattedProducts);
               setLastPage(lastPage);
            }
         } catch (error) {
            console.error(
               error instanceof Error
                  ? error.message
                  : "Failed to search products",
               "error",
            );
         } finally {
            setLoading(false);
         }
      };
      fetchProducts();
   }, [keyword, page]);

   return { products, loading, lastPage, page, setPage };
};

export default useSearchByKeyword;
