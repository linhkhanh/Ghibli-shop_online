import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { AppProvider } from "../../context/AppContext/AppProvider";
import { SnackbarProvider } from "../../context/SnackBarContext/SnackBarProvider";
import ScrollToTop from "../../components/ScrollToTop/ScorllToTop";

const RootLayout = () => {
   return (
      <AppProvider>
         <SnackbarProvider>
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />
         </SnackbarProvider>
      </AppProvider>
   );
};

export default RootLayout;
