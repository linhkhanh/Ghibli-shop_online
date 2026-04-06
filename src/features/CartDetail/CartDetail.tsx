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

type CartItem = {
   id: number;
   name: string;
   quantity: number;
   price: number;
};

const CartDetail = () => {
   const [cartItems, setCartItems] = useState<CartItem[]>([
      { id: 1, name: "Cosmic Comfy Chair", quantity: 1, price: 149.0 },
      { id: 2, name: "Luna Lamp", quantity: 2, price: 59.0 },
      { id: 3, name: "SilkBlend Throw", quantity: 1, price: 79.0 },
      { id: 4, name: "Aurora Candle Set", quantity: 3, price: 34.0 },
   ]);

   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [shippingAddress, setShippingAddress] = useState("");

   const handleQuantityChange = (id: number, newQuantity: number) => {
      if (newQuantity < 1) return;
      setCartItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
         ),
      );
   };

   const handleRemoveItem = (id: number) => {
      setCartItems((items) => items.filter((item) => item.id !== id));
   };

   const calculateTotal = () => {
      return cartItems.reduce(
         (sum, item) => sum + item.price * item.quantity,
         0,
      );
   };

   const total = calculateTotal();

   return (
      <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Shopping Cart
         </Typography>

         {cartItems.length === 0 ? (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
               Your cart is empty.
            </Typography>
         ) : (
            <>
               <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2 }}>
                  <Table>
                     <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                           <TableCell align="center" sx={{ fontWeight: 700 }}>
                              Order
                           </TableCell>
                           <TableCell sx={{ fontWeight: 700 }}>
                              Item Name
                           </TableCell>
                           <TableCell align="center" sx={{ fontWeight: 700 }}>
                              Quantity
                           </TableCell>
                           <TableCell align="right" sx={{ fontWeight: 700 }}>
                              Price
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
                              <TableCell>{item.name}</TableCell>
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
                                 ${(item.price * item.quantity).toFixed(2)}
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
                           <TableCell colSpan={2} />
                           <TableCell
                              align="right"
                              sx={{ fontWeight: 700, fontSize: 16 }}
                           >
                              Total:
                           </TableCell>
                           <TableCell
                              align="right"
                              sx={{ fontWeight: 700, fontSize: 16 }}
                           >
                              ${total.toFixed(2)}
                           </TableCell>
                           <TableCell />
                        </TableRow>
                     </TableBody>
                  </Table>
               </TableContainer>
               <Box component={Paper} sx={{ mt: 4, p: 3, maxWidth: 1000 }}>
                  <Typography variant="h5" component="h2" mb={2}>
                     Checkout Information
                  </Typography>
                  <Box sx={{ display: "grid", gap: 2 }}>
                     <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                     />
                     <TextField
                        label="Phone Number"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                     />
                     <TextField
                        label="Shipping Address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        fullWidth
                        multiline
                        minRows={3}
                     />
                  </Box>
               </Box>
            </>
         )}

         <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary">
               Checkout
            </Button>
            <Button variant="outlined">Continue Shopping</Button>
         </Box>
      </Box>
   );
};

export default CartDetail;
