import {
    createBrowserRouter,
  } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
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
      ]
    },
  ]);

  export default router;