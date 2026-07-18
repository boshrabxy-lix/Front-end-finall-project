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