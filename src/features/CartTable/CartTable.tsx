import {
   Box,
   Button,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   TextField,
   Typography,
} from "@mui/material";
import { useState } from "react";
import useCartDetail from "../../hooks/useCartDetail/useCartDetail";
import { useSnackbar } from "../../hooks/useSnackBar/useSnackBar";

const CartTable = () => {
   const itemsInCart = useCartDetail();
   const [cartItems, setCartItems] = useState(itemsInCart);
   const { showSnackbar } = useSnackbar();

   // TODO: call API here (send request {productId, newQuantity}
   // Recalculate number of items in cart, call updateCart from useContext
   const handleQuantityChange = (id: string, newQuantity: number) => {
      if (newQuantity < 1) return;
      setCartItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
         ),
      );
      showSnackbar("Add to cart successfully!", "success");
   };

   // TODO: Call API here (send request {productId, newQuantity: 0}
   // Recalculate number of items in cart, call updateCart from useContext
   const handleRemoveItem = (id: string) => {
      setCartItems((items) => items.filter((item) => item.id !== id));
      showSnackbar("Item removed from cart!", "info");
   };

   const calculateTotal = () => {
      return cartItems.reduce(
         (sum, item) => sum + (item.price - item.discount) * item.quantity,
         0,
      );
   };

   const total = calculateTotal();

   return (
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Shopping Cart
         </Typography>

         {cartItems.length === 0 ? (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
               Your cart is empty.
            </Typography>
         ) : (
            <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
               <Table>
                  <TableHead>
                     <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                           Order
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                           Item Detail
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                           Quantity
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>
                           Price
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>
                           Discount
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                           Action
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {cartItems.map((item, index) => (
                        <TableRow key={item.id}>
                           <TableCell align="center">{index + 1}</TableCell>
                           <TableCell>
                              <Box
                                 sx={{ display: "flex", alignItems: "center" }}
                              >
                                 <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    style={{
                                       width: 50,
                                       height: 50,
                                       marginRight: 16,
                                       objectFit: "cover",
                                    }}
                                 />
                                 <Typography variant="body1">
                                    {item.title}
                                 </Typography>
                              </Box>
                           </TableCell>
                           <TableCell align="center">
                              <TextField
                                 type="number"
                                 inputProps={{ min: 1 }}
                                 size="small"
                                 value={item.quantity}
                                 onChange={(e) =>
                                    handleQuantityChange(
                                       item.id,
                                       parseInt(e.target.value) || 1,
                                    )
                                 }
                                 sx={{ width: 70 }}
                              />
                           </TableCell>
                           <TableCell align="right">
                              ${item.price.toFixed(2)}
                           </TableCell>
                           <TableCell align="right">
                              {item.discount.toFixed(2)}%
                           </TableCell>
                           <TableCell align="center">
                              <Button
                                 variant="outlined"
                                 color="error"
                                 size="small"
                                 onClick={() => handleRemoveItem(item.id)}
                              >
                                 Remove
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                     <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                        <TableCell
                           colSpan={5}
                           sx={{ fontWeight: 700, fontSize: 16 }}
                        >
                           Total Price
                        </TableCell>
                        <TableCell
                           align="right"
                           sx={{ fontWeight: 700, fontSize: 16 }}
                        >
                           ${total.toFixed(2)}
                        </TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
         )}
      </Box>
   );
};

export default CartTable;
