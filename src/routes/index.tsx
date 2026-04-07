import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import ErrorPage from "../features/ErrorPage/ErrorPage";
import ProductsList from "../features/ProductsList/ProductsList";
import LandingPage from "../features/LandingPage/LandingPage";
import ProductDetail from "../features/ProductDetail/ProductDetail";
import ContactPage from "../features/ContactPage/ContactPage";
import CartViewAndCheckout from "../features/CartViewAndCheckout/CartViewAndCheckout";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <LandingPage />,
         },
         {
            path: "products",
            element: <ProductsList />,
         },
         {
            path: "product-detail/:productId",
            element: <ProductDetail />,
         },
         {
            path: "contact",
            element: <ContactPage />,
         },
         {
            path: "member/cart",
            element: <CartViewAndCheckout />,
         },
      ],
   },
]);
