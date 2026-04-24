import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import type { ProductItem } from "../../utils/dataType";
import { Box } from "@mui/material";
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
   const { id, title, images: image, price, discount = 0 } = productDetail;
   const { user } = useAuthentication();

   const [open, setOpen] = useState(false);
   const handleEdit = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const { deleteProductById } = useDeleteProduct();
   const { addToCart } = useAddCart();

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
               <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                     maxWidth: 180,
                     whiteSpace: "nowrap",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     display: "block",
                  }}
                  title={title}
               >
                  {title}
               </Typography>
            </StyledLink>
            <Box
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
            >
               <Box>
                  {discount > 0 && (
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                     >
                        Original Price: ${price}
                     </Typography>
                  )}
                  <Typography variant="body1" color="primary" fontWeight="bold">
                     Now: ${(price - (price * discount) / 100).toFixed(2)}
                  </Typography>

                  {discount > 0 && (
                     <Typography variant="body2" color="error">
                        {discount}% off
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
                           // sx={{ ml: 1 }}
                        >
                           Delete
                        </Button>
                     </Box>
                  ) : (
                     <Button
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={handleAdd}
                     >
                        Add
                     </Button>
                  )}
               </CardActions>
            </Box>
            {/* {isAdmin && (
               <>
                  <Button
                     variant="outlined"
                     color="primary"
                     startIcon={<EditIcon />}
                     onClick={handleEdit}
                     sx={{ ml: 1 }}
                  >
                     Edit
                  </Button>
                  <Button
                     variant="outlined"
                     color="error"
                     startIcon={<DeleteIcon />}
                     onClick={handleDelete}
                     sx={{ ml: 1 }}
                  >
                     Delete
                  </Button>
               </>
            )} */}
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
