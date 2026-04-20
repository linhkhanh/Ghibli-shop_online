import { Box, Pagination, Stack, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import useSearchByKeyword from "../../hooks/useSearchByKeyword/useSearchByKeyword";

const SearchedProductsList = () => {
   const [searchParams] = useSearchParams();
   const query = searchParams.get("q");
   const { products, loading, lastPage, page, setPage } = useSearchByKeyword({
      keyword: query || "",
   });

   const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   if (loading) return <p>Loading search results...</p>;

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

export default SearchedProductsList;
