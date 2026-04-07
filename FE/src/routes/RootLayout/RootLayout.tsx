import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { AppProvider } from "../../context/AppContext/AppProvider";
import { SnackbarProvider } from "../../context/SnackBarContext/SnackBarProvider";

const RootLayout = () => {
   return (
      <AppProvider>
         <SnackbarProvider>
            <NavBar />
            <Outlet />
            <Footer />
         </SnackbarProvider>
      </AppProvider>
   );
};

export default RootLayout;
