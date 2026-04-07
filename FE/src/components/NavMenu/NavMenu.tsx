import { Box } from "@mui/material";
import MoviesListButton from "../MoviesListButton/MoviesListButton";
import ButtonLink from "../ButtonLink/ButtonLink";

const NavMenu = () => {
   return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
         <MoviesListButton />
         <ButtonLink key="Products" name="Products" path="/products" />
         <ButtonLink key="Contact Us" name="Contact Us" path="/contact" />
      </Box>
   );
};

export default NavMenu;
