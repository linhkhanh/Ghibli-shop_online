import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ShopNameLink from "../ShopNameLink/ShopNameLink";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import NavMenu from "../NavMenu/NavMenu";
import SearchBar from "../SearchBar/SearchBar";
import AccountBtn from "../AccountBtn/AccountBtn";
import CartBtn from "../CartBtn/CartBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import { useState } from "react";

function NavBar() {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
   return (
      <AppBar
         position="sticky"
         sx={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            color: "#333",
         }}
      >
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <ShopNameLink />
               <ResponsiveAppBar />
               <NavMenu />

               <Box display="flex" alignItems="center" gap={2}>
                  <SearchBar />
                  {isLoggedIn ? (
                     <AccountBtn />
                  ) : (
                     <>
                        <LoginBtn handleLogin={() => setIsLoggedIn(true)} />
                     </>
                  )}
                  <CartBtn />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}

export default NavBar;
