import { Box, Pagination, Stack, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsByMovie from "../../hooks/useProductsByMovie/useProductsByMovie";
import { useParams } from "react-router-dom";

const ProductsByMovie = () => {
   const movieId = useParams().movieId;

   const { products, lastPage, loading, setPage, page } = useProductsByMovie({
      movieId: Number(movieId),
   });

   const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   if (loading) return <p>Loading Ghibli treasures...</p>;
   return (
      <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
         <Box
            sx={{
               backgroundColor: "#1976d2", // MUI blue[700]
               borderRadius: 2,
               mb: 3,
               px: 3,
               py: 2,
               display: "inline-block",
            }}
         >
            <Typography
               variant="h4"
               component="h1"
               gutterBottom
               sx={{ color: "#fff", m: 0 }}
            >
               {products.length > 0 ? products[0].movieTitle : "No Movie"}
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
            {products.map((product) => (
               <ProductCard key={product.id} productDetail={product} />
            ))}
         </Box>
         {lastPage > 1 && (
            <Stack alignItems="center" mt={4}>
               <Pagination
                  count={lastPage}
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

export default ProductsByMovie;
