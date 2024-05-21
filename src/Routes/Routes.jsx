import {
    createBrowserRouter,
  } from "react-router-dom";
import ManiLayout from "../Layout/ManiLayout";
import Home from "../pages/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ManiLayout></ManiLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;