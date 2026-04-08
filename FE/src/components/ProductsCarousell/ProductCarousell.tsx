import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";
import type { ProductsByCategory } from "../../utils/dataType";

interface ProductsCarousellProps {
   productsListByMovie: ProductsByCategory;
}

const ProductsCarousell = ({ productsListByMovie }: ProductsCarousellProps) => {
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
   );
};

export default ProductsCarousell;
