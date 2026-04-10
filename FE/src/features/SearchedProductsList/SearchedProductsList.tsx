import { Box, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import useSearchedProductsList from "../../hooks/useSearchedProductsList/useSearchProductsList";
import { useSearchParams } from "react-router-dom";

const SearchedProductsList = () => {
   const [searchParams] = useSearchParams();
   const query = searchParams.get("q");
   const productsList = useSearchedProductsList({
      keyword: query || "",
   });

   return (
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 4 }}>
         <Box
            sx={{
               backgroundColor: "#1976d2",
               borderRadius: 2,
               mb: 3,
               px: 3,
               py: 2,
               display: "inline-block",
            }}
         >
            <Typography
               variant="h5"
               sx={{ color: "#fff", fontWeight: "bold", m: 0 }}
            >
               Search Results: {query}
            </Typography>
         </Box>
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
