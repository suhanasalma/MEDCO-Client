import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/LoginRegister/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ]
  },
]);