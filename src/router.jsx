import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import ProductDetails from "./pages/productDetails/ProductDetails";
import ProtectedRouter from "../src/ProtectedRouter";
import CategoriesPage from "./pages/categories/CategoriesPage";
import Checkout from "./pages/checkout/Checkout";
import ProductsPage from "./pages/products/ProductsPage";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import SendCodePage from "./pages/auth/SendCodePage";
import SettingPage from "./pages/settingPage/SettingPage";
import ResetPage from "./pages/auth/ResetPage";
import ProByCategory from "./pages/proByCategory/ProByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "Carts",
        element:
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
      },
      {
        path: "checkout",
        element:
          <ProtectedRouter>
            <Checkout />
          </ProtectedRouter>
      },
      {
        path: "profile",
        element:
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>,
        children: [
          {
            index: true,
            element: <ProfileInfo />
          },
          {
            path: "orders",
            element: <ProfileOrders />
          },
          {
            path: "settings",
            element: <SettingPage />
          },
        ]
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "categories",
        element: <CategoriesPage />
      },
      {
        path: "Products/category/:id",
        element: <ProByCategory />
      },
      {
        path: "Products/:id",
        element: <ProductDetails />
      },
      {
        path: "auth/Account/SendCode",
        element: <SendCodePage />
      },
      {
        path: "auth/Account/resetpassword",
        element: <ResetPage />
      },
    ]
  },
]);

export default router;