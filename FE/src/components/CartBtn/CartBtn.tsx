import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

const CartBtn = () => {
   const { cartCount } = useAuthentication();

   return (
      <Tooltip title="Click to see your cart">
         <Link to="/member/cart">
            <IconButton>
               {cartCount == 0 ? (
                  <ShoppingCartOutlined />
               ) : (
                  <Badge badgeContent={cartCount} color="error">
                     <ShoppingCartOutlined />
                  </Badge>
               )}
            </IconButton>
         </Link>
      </Tooltip>
   );
};

export default CartBtn;
