import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import type { ProductItem } from "../../utils/datatType";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext/AppContext";
import { useSnackbar } from "../../hooks/useSnackBar/useSnackBar";

interface ProductCardProps {
   productDetail: ProductItem;
}

export default function ProductCard(props: ProductCardProps) {
   const { id, title, image, price, discount = 0 } = props.productDetail;
   const { cartCount, updateCart } = useContext(AppContext);
   const { showSnackbar } = useSnackbar();
   const getProductLink = () => {
      return "/product-detail" + "/" + id;
   };

   // TODO: Call API here (send request {productId})
   const handleAdd = () => {
      showSnackbar("Add to cart successfully!", "success");
      updateCart(cartCount + 1);
   };
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
         <CardMedia sx={{ height: 200 }} image={image} title={title} />
         <CardContent>
            <Link to={getProductLink()}>
               <Typography gutterBottom variant="h5">
                  {title}
               </Typography>
            </Link>
            <Box display="flex" flexDirection="row">
               <Box>
                  <Typography
                     variant="body2"
                     color="text.secondary"
                     sx={{ textDecoration: "line-through" }}
                  >
                     Original Price: ${price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="primary" fontWeight="bold">
                     Now: ${(price - price * discount).toFixed(2)}
                  </Typography>
                  {/* TODO: fix Discount render */}
                  {discount && (
                     <Typography variant="body2" color="primary">
                        {discount}% off
                     </Typography>
                  )}
               </Box>
               <CardActions>
                  <Button
                     variant="outlined"
                     startIcon={<AddShoppingCartIcon />}
                     onClick={handleAdd}
                  >
                     Add
                  </Button>
               </CardActions>
            </Box>
         </CardContent>
      </Card>
   );
}
