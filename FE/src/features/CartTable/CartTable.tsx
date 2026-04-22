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
import useCartDetail from "../../hooks/useCartDetail/useCartDetail";
import StyledLink from "../../components/StyledLink/StyledLink";
import useUpdateCartItem from "../../hooks/useUpdateCartItem/useUpdateCartItem";
import useRemoveItem from "../../hooks/useRemoveItem/useRemoveItem";

const CartTable = () => {
   const { cartInfo, loading, setCartInfo } = useCartDetail();
   const { editCartItem } = useUpdateCartItem();
   const { removeItem } = useRemoveItem();

   const handleQuantityChange = async (props: {
      newQuantity: number;
      cartItemId: number;
   }) => {
      const { newQuantity, cartItemId } = props;
      if (newQuantity < 1) return;
      await editCartItem({
         setCartInfo,
         cartItemId,
         newQuantity,
         cartInfo,
      });
   };

   const handleRemoveItem = async (itemId: number) => {
      await removeItem({
         itemId,
         setCartInfo,
         cartInfo,
      });
   };

   const calculateTotal = () => {
      return cartInfo.items.reduce(
         (sum, item) =>
            sum + item.price * item.quantity * (1 - item.discount / 100),
         0,
      );
   };

   const total = calculateTotal();

   if (loading) {
      return (
         <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
               Loading cart details...
            </Typography>
         </Box>
      );
   }

   return (
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
         <Typography variant="h4" component="h1" gutterBottom>
            Shopping Cart
         </Typography>

         {cartInfo.items.length === 0 ? (
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
                     {cartInfo.items.map((item, index) => (
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
                                 <StyledLink
                                    path={"/product-detail/" + item.productId}
                                 >
                                    <Typography variant="body1">
                                       {item.title}
                                    </Typography>
                                 </StyledLink>
                              </Box>
                           </TableCell>
                           <TableCell align="center">
                              <TextField
                                 type="number"
                                 inputProps={{ min: 1 }}
                                 size="small"
                                 value={item.quantity}
                                 onChange={(e) =>
                                    handleQuantityChange({
                                       newQuantity: parseInt(e.target.value),
                                       cartItemId: item.id,
                                    })
                                 }
                                 sx={{ width: 70 }}
                              />
                           </TableCell>
                           <TableCell align="right">${item.price}</TableCell>
                           <TableCell align="right">{item.discount}%</TableCell>
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
