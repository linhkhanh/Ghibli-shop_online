import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { AppProvider } from "../../context/AppContext/AppProvider";

const RootLayout = () => {
   return (
      <AppProvider>
         <NavBar />
         <Outlet />
         <Footer />
      </AppProvider>
   );
};

export default RootLayout;
