import { Box, Typography } from "@mui/material";
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
            <Typography
               variant="body1"
               color="text.secondary"
               textAlign="center"
            >
               Loading related products...
            </Typography>
         ) : (
            <ProductsCarousell productsListByMovie={products} />
         )}
      </Box>
   );
};

export default RelatedProducts;
