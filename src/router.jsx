import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./assets/components/layouts/MainLayout";
import Home from "./assets/pages/home/Home";
import Login from "./assets/pages/auth/login/Login";
import Cart from "./assets/pages/cart/Cart";
import Register from "./assets/pages/auth/register/Register";
import ProductDetails from "./assets/pages/productDetails/ProductDetails";
import ProtectedRouter from "../src/ProtectedRouter";
import CategoriesPage from "./assets/pages/categories/CategoriesPage";
import Checkout from "./assets/pages/checkout/Checkout";


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
        path: "cart",
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
        path: "login",
        element: <Login />
      },
      {
        path: "products",
        element: <Login />
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
        path: "Products/:id",
        element: <ProductDetails />
      }
    ]
  },
]);

export default router;