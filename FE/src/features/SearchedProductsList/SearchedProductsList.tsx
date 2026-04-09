import { Box, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useSearchedProductsList from "../../hooks/useSearchedProductsList/useSearchProductsList";
import { useParams } from "react-router-dom";

const SearchedProductsList = () => {
   const searchKeyword = useParams().keyword;
   const productsList = useSearchedProductsList({
      keyword: searchKeyword || "",
   });

   return (
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 4 }}>
         <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Searched Products
         </Typography>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
               gap: 3,
            }}
         >
            {productsList.map((product) => (
               <ProductCard key={product.id} productDetail={product} />
            ))}
         </Box>
      </Box>
   );
};

export default SearchedProductsList;
