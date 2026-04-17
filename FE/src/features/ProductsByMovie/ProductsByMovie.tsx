import { Box, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { ProductsByCategory } from "../../utils/dataType";
import useProductsByMovie from "../../hooks/useProductsByMovie/useProductsByMovie";
import { useParams } from "react-router-dom";

const ProductsByMovie = () => {
   const movieId = useParams().movieId;
   const productsList: ProductsByCategory = useProductsByMovie(movieId || "");
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
               {productsList.movie.title}
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
            {productsList.products.map((product) => (
               <ProductCard key={product.id} productDetail={product} />
            ))}
         </Box>
      </Box>
   );
};

export default ProductsByMovie;
