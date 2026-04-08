import { Box, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProductsList from "../../hooks/useProductsList/useProductsList";
import type { ProductItem } from "../../utils/dataType";

const ProductsList = () => {
   const productsList: ProductItem[] = useProductsList();

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
            {productsList.map((product) => (
               <ProductCard key={product.id} productDetail={product} />
            ))}
         </Box>
      </Box>
   );
};

export default ProductsList;
