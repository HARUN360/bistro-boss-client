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
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AddItems from "../pages/Dashboard/Admin/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/Admin/ManageItems";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem";
import Payment from "../pages/Dashboard/User/Payment";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import UserHome from "../pages/Dashboard/User/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";

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
    {
      path: '/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        // normal user routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>,
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-teal-three.vercel.app/menu/${params.id}`)
        },
        {
           path: 'users',
           element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

  export default router;