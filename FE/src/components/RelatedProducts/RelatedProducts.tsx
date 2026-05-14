import { Box, CircularProgress, Typography } from "@mui/material";
import ProductsCarousell from "../ProductsCarousell/ProductCarousell";
import useProductsByMovie from "../../hooks/useProductsByMovie/useProductsByMovie";

interface RelatedProductsProps {
   movieId: number;
}
const RelatedProducts = (props: RelatedProductsProps) => {
   const { movieId } = props;
   const { products, loading } = useProductsByMovie({ movieId, limit: 6 });

   return (
      <Box>
         <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Related Products
         </Typography>
         {loading ? (
            <CircularProgress
               size={48}
               sx={{ display: "block", mx: "auto", mt: 4 }}
               aria-label="Loading Related Products"
            />
         ) : (
            <ProductsCarousell productsListByMovie={products} />
         )}
      </Box>
   );
};

export default RelatedProducts;
