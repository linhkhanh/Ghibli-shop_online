import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import type { ProductItem } from "../../utils/dataType";
import { Box, Chip } from "@mui/material";
import StyledLink from "../StyledLink/StyledLink";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import ProductUpsertModal from "../ProductUpsertModal/ProductUpsertModal";
import { useState } from "react";
import useDeleteProduct from "../../hooks/useDeleteProduct/useDeleteProduct";
import useAddCart from "../../hooks/useAddCart/useAddCart";

interface ProductCardProps {
   productDetail: ProductItem;
}

export default function ProductCard(props: ProductCardProps) {
   const { productDetail } = props;
   const {
      id,
      title,
      images: image,
      price,
      discount = 0,
      stock,
   } = productDetail;
   const { user } = useAuthentication();

   const [open, setOpen] = useState(false);
   const handleEdit = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const { deleteProductById } = useDeleteProduct();
   const { addToCart, loading: addToCartLoading } = useAddCart();

   const handleAdd = async () => {
      await addToCart({ productId: id, quantity: 1 });
   };
   const handleDelete = async () => {
      await deleteProductById(id);
      window.location.reload();
   };

   const isAdmin = user?.role === "admin";

   return (
      <Card
         sx={{
            minWidth: 260,
            maxWidth: 280,
            scrollSnapAlign: "start",
            borderRadius: 3,
            boxShadow: 3,
            flexShrink: 0,
         }}
      >
         <CardMedia sx={{ height: 200 }} image={image[0]} title={title} />
         <CardContent>
            <StyledLink path={"/product-detail/" + id}>
               <Box display="flex" alignItems="center" gap={1}>
                  <Typography
                     gutterBottom
                     variant="h6"
                     sx={{
                        maxWidth: 140,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "block",
                     }}
                     title={title}
                  >
                     {title}
                  </Typography>
                  {discount > 0 && (
                     <Chip
                        label={`🔥 -${discount}%`}
                        color="error"
                        size="small"
                        sx={{
                           fontWeight: "bold",
                           fontSize: 13,
                           letterSpacing: 1,
                        }}
                     />
                  )}
               </Box>
            </StyledLink>
            <Box
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
               alignItems="flex-start"
            >
               <Box>
                  {discount > 0 && (
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through", mb: 0.5 }}
                     >
                        Original: ${price}
                     </Typography>
                  )}
                  <Typography
                     variant="body1"
                     color="primary"
                     fontWeight="bold"
                     sx={{ mb: discount > 0 ? 0.5 : 0 }}
                  >
                     Now: ${(price - (price * discount) / 100).toFixed(2)}
                  </Typography>
                  {isAdmin && (
                     <Typography
                        variant="body2"
                        color={stock > 0 ? "success.main" : "error"}
                        mt={1}
                     >
                        Stock: {stock > 0 ? stock : "Out of stock"}
                     </Typography>
                  )}
               </Box>
               <CardActions>
                  {isAdmin ? (
                     <Box display="flex" flexDirection="column">
                        <Button
                           variant="outlined"
                           color="primary"
                           startIcon={<EditIcon />}
                           onClick={handleEdit}
                        >
                           Edit
                        </Button>
                        <Button
                           variant="outlined"
                           color="error"
                           startIcon={<DeleteIcon />}
                           onClick={handleDelete}
                        >
                           Delete
                        </Button>
                     </Box>
                  ) : (
                     <Button
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={handleAdd}
                        disabled={stock <= 0 || addToCartLoading}
                     >
                        Add
                     </Button>
                  )}
               </CardActions>
            </Box>
         </CardContent>
         <ProductUpsertModal
            open={open}
            handleClose={handleClose}
            title="Edit Product"
            defaultValues={productDetail}
         />
      </Card>
   );
}
