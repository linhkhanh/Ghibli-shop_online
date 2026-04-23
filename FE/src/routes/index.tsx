import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import ErrorPage from "../features/ErrorPage/ErrorPage";
import ProductsList from "../features/ProductsList/ProductsList";
import LandingPage from "../features/LandingPage/LandingPage";
import ProductDetail from "../features/ProductDetail/ProductDetail";
import ContactPage from "../features/ContactPage/ContactPage";
import CartViewAndCheckout from "../features/CartViewAndCheckout/CartViewAndCheckout";
import OrdersList from "../features/OrdersList/OrdersList";
import OrderDetail from "../features/OrderDetail/OrderDetail";
import ProductsByMovie from "../features/ProductsByMovie/ProductsByMovie";
import SearchedProductsList from "../features/SearchedProductsList/SearchedProductsList";
import AdminOrdersList from "../features/AdminOrdersList/AdminOrdersList";

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
         {
            path: "member/orders",
            element: <OrdersList />,
         },
         {
            path: "member-order-detail/:orderId",
            element: <OrderDetail />,
         },
         {
            path: "products-by-movie/:movieId",
            element: <ProductsByMovie />,
         },
         {
            path: "search",
            element: <SearchedProductsList />,
         },
         {
            path: "admin/orders",
            element: <AdminOrdersList />,
         },
      ],
   },
]);
