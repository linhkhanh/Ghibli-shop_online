import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { type MouseEvent } from "react";

interface MenuSignProps {
   handleOpenMenu: (event: MouseEvent<HTMLElement>) => void;
}

const MenuSign = ({ handleOpenMenu: handleOpenNavMenu }: MenuSignProps) => {
   return (
      <IconButton
         size="large"
         aria-label="account of current user"
         aria-controls="menu-appbar"
         aria-haspopup="true"
         onClick={handleOpenNavMenu}
         color="inherit"
      >
         <MenuIcon />
      </IconButton>
   );
};

export default MenuSign;
