import { Box, Typography, Pagination, Stack } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsList from "../../hooks/useProductsList/useProductsList";
import type { ProductItem } from "../../utils/dataType";
import { useEffect, useState } from "react";

const LowStockProductsList = () => {
   const [productsList, setProductsList] = useState<ProductItem[]>([]);
   const { getProducts } = useProductsList(true);

   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(true);
   const [pageCount, setPageCount] = useState<number>(0);

   useEffect(() => {
      const fetchProducts = async () => {
         setLoading(true);
         const { products, lastPage } = await getProducts(page);

         setProductsList(products);
         setPageCount(lastPage);
         setLoading(false);
      };
      fetchProducts();
   }, [page]);

   const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   if (loading) return <p>Loading Ghibli treasures...</p>;

   return (
      <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
         >
            <Typography variant="h4" component="h1" gutterBottom>
               Low Stock Products
            </Typography>
         </Box>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
               gap: 3,
               mt: 2,
            }}
         >
            {productsList.map((product) => (
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

export default LowStockProductsList;
