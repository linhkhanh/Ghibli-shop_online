import { Box, Typography } from "@mui/material";
import useRelatedProducts from "../../hooks/useRelatedProducts/useRelatedProducts";
import ProductsCarousell from "../ProductsCarousell/ProductCarousell";

const RelatedProducts = () => {
   const relatedProducts = useRelatedProducts();

   return (
      <Box>
         <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Related Products
         </Typography>
         <ProductsCarousell productsListByMovie={relatedProducts} />
      </Box>
   );
};

export default RelatedProducts;
