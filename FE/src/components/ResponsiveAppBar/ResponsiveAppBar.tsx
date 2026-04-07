import { Box, Menu, MenuItem, Typography } from "@mui/material";
import MenuSign from "../MenuSign/MenuSign";
import MoviesListButton from "../MoviesListButton/MoviesListButton";
import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
   };

   return (
      <>
         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MenuSign handleOpenMenu={handleOpenNavMenu} />
            <Menu
               id="menu-appbar"
               anchorEl={anchorElNav}
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
               }}
               keepMounted
               transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{ display: { xs: "block", md: "none" } }}
            >
               <MoviesListButton />
               {/* TODO: Create a common component for Link */}
               <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "inherit" }}
               >
                  <MenuItem key="Products" onClick={handleCloseNavMenu}>
                     <Typography sx={{ textAlign: "center" }}>
                        Products
                     </Typography>
                  </MenuItem>
               </Link>
               <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
               >
                  <MenuItem key="Contact Us" onClick={handleCloseNavMenu}>
                     <Typography sx={{ textAlign: "center" }}>
                        Contact Us
                     </Typography>
                  </MenuItem>
               </Link>
            </Menu>
         </Box>
      </>
   );
};

export default ResponsiveAppBar;
