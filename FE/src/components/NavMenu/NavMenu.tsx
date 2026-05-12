import { Box } from "@mui/material";
import MoviesListButton from "../MoviesListButton/MoviesListButton";
import ButtonLink from "../ButtonLink/ButtonLink";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";

const NavMenu = () => {
   const { user } = useAuthentication();
   return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
         <MoviesListButton />
         <ButtonLink key="Products" name="Products" path="/products" />
         <ButtonLink key="Contact Us" name="Contact Us" path="/contact" />
         <ButtonLink key="About Us" name="About Us" path="/about-us" />
         {user?.role === "admin" && (
            <ButtonLink key="Dashboard" name="Dashboard" path="/dashboard" />
         )}
      </Box>
   );
};

export default NavMenu;
