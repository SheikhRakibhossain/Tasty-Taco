import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Menu from "../Pages/OurMenu/Menu";
import Food from "../Pages/Food/Food";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Pay from "../Pages/Secret/Pay";
import PrivateRoute from "../Hooks/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import MyCart from "../Dashboard/MyCart/MyCart";
import AddItem from './../Dashboard/Amin/AddItem/AddItem';
import Admin from './../Dashboard/Amin/Admin/Admin';
import AllUsers from './../Dashboard/Amin/AllUsers/AllUsers';
import ManageItem from "../Dashboard/Amin/ManageItem/ManageItem";
import ManageBooking from './../Dashboard/Amin/ManageBooking/ManageBooking';
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "food/:category",
        element: <Food />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "pay",
        element: (
          <PrivateRoute>
            <Pay />
          </PrivateRoute>
        ),
      },
      
    ],
  },
  {
    
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      ),
      children:[
       
        {
          path:'add-item',
          element:<AdminRoute><AddItem/></AdminRoute>
        },
        {
          path:'admin',
          element:<Admin/>
        },
        {
          path:'all-users',
          element:<AllUsers/>
        },
        {
          path:'manage-booking',
          element:<ManageBooking/>
        },
        {
          path:'manage-item',
          element:<ManageItem/>
        },
        // normal user pages routes
        {
          path:'my-cart',
          element:<MyCart/>
        },
      ]
    
  }
]);

export default router;
