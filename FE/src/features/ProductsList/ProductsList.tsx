import { Box, Typography, Pagination, Stack, Button } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsList from "../../hooks/useProductsList/useProductsList";
import type { ProductItem } from "../../utils/dataType";
import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
   const { user } = useAuthentication();
   const [productsList, setProductsList] = useState<ProductItem[]>([]);
   const { getProducts } = useProductsList(false);

   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(true);
   const [pageCount, setPageCount] = useState<number>(0);
   const navigate = useNavigate();

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
   if (productsList.length === 0)
      return (
         <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
            <Typography variant="h4" component="h1" gutterBottom>
               All Products
            </Typography>
            <Typography variant="body1">No products found.</Typography>
         </Box>
      );

   return (
      <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
         >
            <Typography variant="h4" component="h1" gutterBottom>
               Product List
            </Typography>
            {user?.role === "admin" && (
               <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navigate("/low-stock-products")}
               >
                  Low Stock
               </Button>
            )}
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

export default ProductsList;
