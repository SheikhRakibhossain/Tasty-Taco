import {createBrowserRouter} from "react-router-dom";
import Main from '../Main/Main';
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Menu from "../Pages/OurMenu/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"menu",
            element:<Menu/>
        }
      ]
    },
  ]);

export default router;