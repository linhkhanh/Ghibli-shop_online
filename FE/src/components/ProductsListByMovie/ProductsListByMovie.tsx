import { Box, Typography, Grid, Divider } from "@mui/material";
import ProductsCarousell from "../ProductsCarousell/ProductCarousell";
import useProductsByMovie from "../../hooks/useProductsByMovie/useProductsByMovie";

interface ProductsListByMovieProps {
   movieId: number;
}
const ProductsListByMovie = ({ movieId }: ProductsListByMovieProps) => {
   const { products, loading } = useProductsByMovie({ movieId, limit: 6 });

   if (loading) return <p>Loading products...</p>;
   return (
      <Box pt={10} pl={20} pr={20}>
         <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 3, textAlign: "center" }}
         >
            {products[0]?.movieTitle || "No Movie"}
         </Typography>
         <Grid container spacing={8}>
            <Grid size={2}>
               <img
                  src={products[0]?.movieImg}
                  alt={products[0]?.movieTitle}
                  width="100%"
               />
            </Grid>
            <Grid size={10} sx={{ position: "relative" }}>
               <ProductsCarousell productsListByMovie={products} />
            </Grid>
         </Grid>
         <Divider sx={{ padding: 2 }} />
      </Box>
   );
};

export default ProductsListByMovie;
