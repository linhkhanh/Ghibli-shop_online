import {
   Box,
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

const CartDetail = () => {
   const itemsInCart = useCartDetail();
   const [cartItems, setCartItems] = useState(itemsInCart);

   const handleQuantityChange = (id: string, newQuantity: number) => {
      if (newQuantity < 1) return;
      setCartItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
         ),
      );
   };

   const calculateTotal = () => {
      return cartItems.reduce(
         (sum, item) => sum + (item.price - item.discount) * item.quantity,
         0,
      );
   };

   const total = calculateTotal();

   return (
      <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Shopping Cart
         </Typography>

         <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
            <Table>
               <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                     <TableCell align="center" sx={{ fontWeight: 700 }}>
                        Order
                     </TableCell>
                     <TableCell sx={{ fontWeight: 700 }}>Item Detail</TableCell>
                     <TableCell align="center" sx={{ fontWeight: 700 }}>
                        Quantity
                     </TableCell>
                     <TableCell align="right" sx={{ fontWeight: 700 }}>
                        Price
                     </TableCell>
                     <TableCell align="right" sx={{ fontWeight: 700 }}>
                        Discount
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {cartItems.map((item, index) => (
                     <TableRow key={item.id}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell>
                           <Box sx={{ display: "flex", alignItems: "center" }}>
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
                     </TableRow>
                  ))}
                  <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
                     <TableCell
                        colSpan={4}
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
      </Box>
   );
};

export default CartDetail;
