import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext/AppContext";
import { Link } from "react-router-dom";

const CartBtn = () => {
   const { cartCount } = useContext(AppContext);

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
