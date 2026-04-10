import { Box } from "@mui/material";
import CartTable from "../CartTable/CartTable";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

const CartViewAndCheckout = () => {
   const { cartCount } = useAuthentication();
   return (
      <Box display="flex" flexDirection="row" flexWrap="wrap" px={15} py={5}>
         <CartTable />

         {cartCount > 0 && <CheckoutForm />}
      </Box>
   );
};

export default CartViewAndCheckout;
