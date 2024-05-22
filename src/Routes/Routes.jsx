import {
    createBrowserRouter,
  } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret";
import PrivateRoutes from "./PrivateRoutes";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ManiLayout></ManiLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;