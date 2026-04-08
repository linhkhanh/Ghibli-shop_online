import { Box, Typography, Grid, Divider } from "@mui/material";
import type { ProductsByCategory } from "../../utils/dataType";
import ProductsCarousell from "../ProductsCarousell/ProductCarousell";

interface ProductsByMovieProps {
   productsListByMovie: ProductsByCategory;
}

const ProductsListByMovie = ({ productsListByMovie }: ProductsByMovieProps) => {
   return (
      <Box pt={10} pl={20} pr={20}>
         <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 3, textAlign: "center" }}
         >
            {productsListByMovie.movie.name}
         </Typography>
         <Grid container spacing={8}>
            <Grid size={2}>
               <img
                  src={productsListByMovie.movie.img}
                  alt={productsListByMovie.movie.name}
                  width="100%"
               />
            </Grid>
            <Grid size={10} sx={{ position: "relative" }}>
               <ProductsCarousell productsListByMovie={productsListByMovie} />
            </Grid>
         </Grid>
         <Divider sx={{ padding: 2 }} />
      </Box>
   );
};

export default ProductsListByMovie;
