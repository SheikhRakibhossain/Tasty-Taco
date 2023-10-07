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
          path:'my-cart',
          element:<MyCart/>
        }
      ]
    
  }
]);

export default router;
