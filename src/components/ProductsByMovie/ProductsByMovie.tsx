import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Typography, Grid, Divider } from "@mui/material";
import { useRef } from "react";
import type { ProductsByCategory } from "../../utils/datatType";
import ProductCard from "../ProductCard/ProductCard";

interface ProductsByMovieProps {
   productsListByMovie: ProductsByCategory;
}
// TODO:refactor to use ProductCard component and make it more reusable for different movies
const ProductsListByMovie = ({ productsListByMovie }: ProductsByMovieProps) => {
   const scrollRef = useRef<HTMLDivElement | null>(null);

   const handleScroll = (direction: "left" | "right") => {
      if (!scrollRef.current) return;
      const distance = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
         left: direction === "left" ? -distance : distance,
         behavior: "smooth",
      });
   };

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
               <Box>
                  <IconButton
                     onClick={() => handleScroll("left")}
                     sx={{
                        position: "absolute",
                        left: -10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        bgcolor: "background.paper",
                        boxShadow: 2,
                     }}
                     aria-label="scroll left"
                  >
                     <ArrowBackIosNew />
                  </IconButton>

                  <Box
                     ref={scrollRef}
                     sx={{
                        display: "flex",
                        gap: 2,
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        py: 1,
                        px: 1,
                        "&::-webkit-scrollbar": {
                           height: 6,
                        },
                        "&::-webkit-scrollbar-thumb": {
                           backgroundColor: "rgba(0,0,0,0.2)",
                           borderRadius: 3,
                        },
                     }}
                  >
                     {productsListByMovie.products.map((product) => (
                        <ProductCard key={product.id} productDetail={product} />
                     ))}
                  </Box>

                  <IconButton
                     onClick={() => handleScroll("right")}
                     sx={{
                        position: "absolute",
                        right: -10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        bgcolor: "background.paper",
                        boxShadow: 2,
                     }}
                     aria-label="scroll right"
                  >
                     <ArrowForwardIos />
                  </IconButton>
               </Box>
            </Grid>
         </Grid>
         <Divider sx={{ padding: 2 }} />
      </Box>
   );
};

export default ProductsListByMovie;
