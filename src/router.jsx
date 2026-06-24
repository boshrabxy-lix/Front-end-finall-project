import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./assets/components/layouts/MainLayout";
import Home from "./assets/pages/home/Home";
import Login from "./assets/pages/auth/login/Login";
import Register from "./assets/pages/auth/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    Children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
]);

export default router;