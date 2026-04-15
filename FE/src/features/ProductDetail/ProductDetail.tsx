import {
   Divider,
   Box,
   Typography,
   Button,
   Tabs,
   Tab,
   Paper,
   Grid,
} from "@mui/material";
import OtherMovies from "../../components/OtherMovies/OtherMovies";
import useProductDetail from "../../hooks/useProductDetail/useProductDetail";
import { useParams } from "react-router-dom";
import { useSnackbar } from "../../hooks/useSnackBar/useSnackBar";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

import React from "react";

const ProductDetail = () => {
   const { productId } = useParams();
   const productInfo = useProductDetail(productId || "");
   const { cartCount, updateCart } = useAuthentication();
   const { showSnackbar } = useSnackbar();
   const [tabIndex, setTabIndex] = React.useState(0);

   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      setTabIndex(newValue);
   };

   const handleAdd = () => {
      showSnackbar("Add to cart successfully!", "success");
      updateCart(cartCount + 1);
   };

   return (
      <Box component="main" sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
         <Grid container spacing={4}>
            <Grid size={8}>
               <Paper
                  elevation={3}
                  sx={{
                     borderRadius: 3,
                     overflow: "hidden",
                     p: 2,
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "flex-start",
                     height: 420,
                  }}
               >
                  <Tabs
                     orientation="vertical"
                     value={tabIndex}
                     onChange={handleTabChange}
                     variant="scrollable"
                     scrollButtons="auto"
                     aria-label="product images tabs"
                     sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        minWidth: 100,
                        height: 420,
                     }}
                  >
                     {productInfo.images.map((img: string, idx: number) => (
                        <Tab
                           key={idx}
                           label={
                              <img
                                 src={img}
                                 width={50}
                                 height="auto"
                                 alt={`Product Image ${idx + 1}`}
                              />
                           }
                           id={`product-image-tab-${idx}`}
                           aria-controls={`product-image-panel-${idx}`}
                        />
                     ))}
                  </Tabs>
                  {productInfo.images.map((img: string, idx: number) => (
                     <Box
                        key={idx}
                        role="tabpanel"
                        hidden={tabIndex !== idx}
                        id={`product-image-panel-${idx}`}
                        aria-labelledby={`product-image-tab-${idx}`}
                        sx={{
                           width: "auto",
                           height: 420,
                           display: tabIndex === idx ? "flex" : "none",
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                     >
                        <Box
                           component="img"
                           src={img}
                           alt={productInfo.title}
                           sx={{
                              width: "100%",
                              height: 400,
                              objectFit: "cover",
                              borderRadius: 2,
                              pl: 5,
                           }}
                        />
                     </Box>
                  ))}
               </Paper>
            </Grid>
            <Grid size={4}>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                  }}
               >
                  <Box>
                     <Typography variant="h4" component="h1" gutterBottom>
                        {productInfo.title}
                     </Typography>
                     <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                     >
                        {productInfo.description}
                     </Typography>
                     {/* Price Section */}
                     <Box sx={{ mb: 2 }}>
                        {productInfo.discount ? (
                           <>
                              <Typography
                                 variant="body1"
                                 color="text.secondary"
                                 sx={{ textDecoration: "line-through" }}
                              >
                                 ${productInfo.price.toFixed(2)}
                              </Typography>
                              <Typography
                                 variant="h5"
                                 color="primary"
                                 fontWeight={700}
                              >
                                 $
                                 {(
                                    productInfo.price -
                                    (productInfo.price * productInfo.discount) /
                                       100
                                 ).toFixed(2)}{" "}
                                 <Typography
                                    component="span"
                                    variant="body2"
                                    color="error"
                                    sx={{ ml: 1 }}
                                 >
                                    {Math.round(productInfo.discount)}% OFF
                                 </Typography>
                              </Typography>
                           </>
                        ) : (
                           <Typography
                              variant="h5"
                              color="primary"
                              fontWeight={700}
                           >
                              ${productInfo.price.toFixed(2)}
                           </Typography>
                        )}
                     </Box>
                  </Box>
                  <Button
                     variant="contained"
                     color="primary"
                     size="large"
                     sx={{ mt: 4, borderRadius: 9999, fontWeight: 600 }}
                     onClick={handleAdd}
                  >
                     Add To Cart
                  </Button>
               </Box>
            </Grid>
         </Grid>
         <Divider sx={{ my: 6 }} />
         <RelatedProducts />
         <Divider sx={{ my: 6 }} />
         <OtherMovies />
      </Box>
   );
};

export default ProductDetail;
