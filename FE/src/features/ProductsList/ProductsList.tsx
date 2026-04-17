import { Box, Typography, Pagination, Stack } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsList from "../../hooks/useProductsList/useProductsList";
import type { ProductItem } from "../../utils/dataType";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 24;

const ProductsList = () => {
   const { getProducts } = useProductsList();
   const [productsList, setProductsList] = useState<ProductItem[]>([]);

   const [page, setPage] = useState(1);
   const pageCount = Math.ceil(productsList.length / ITEMS_PER_PAGE);
   const paginatedProducts = productsList.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
   );

   useEffect(() => {
      const fetchProducts = async () => {
         const products = await getProducts();
         console.log("Fetched products in component:", products);
         setProductsList(products);
      };
      fetchProducts();
   }, []);

   const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Product List
         </Typography>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
               gap: 3,
               mt: 2,
            }}
         >
            {paginatedProducts.map((product) => (
               <ProductCard key={product.id} productDetail={product} />
            ))}
         </Box>
         {pageCount > 1 && (
            <Stack alignItems="center" mt={4}>
               <Pagination
                  count={pageCount}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                  shape="rounded"
                  showFirstButton
                  showLastButton
               />
            </Stack>
         )}
      </Box>
   );
};

export default ProductsList;
