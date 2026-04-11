import { AppBar, Box, Container, Toolbar } from "@mui/material";
import ShopNameLink from "../ShopNameLink/ShopNameLink";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import NavMenu from "../NavMenu/NavMenu";
import SearchBar from "../SearchBar/SearchBar";
import AccountBtn from "../AccountBtn/AccountBtn";
import CartBtn from "../CartBtn/CartBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import { useAuthentication } from "../../hooks/useAuthentication/useAuthentication";
import CreateProduct from "../../features/CreateProduct/CreateProduct";

function NavBar() {
   const { user } = useAuthentication();
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
                  {user?.role === "admin" && <CreateProduct />}
                  {user ? (
                     <AccountBtn />
                  ) : (
                     <>
                        <LoginBtn />
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
