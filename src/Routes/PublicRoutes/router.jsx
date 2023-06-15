import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/LoginRegister/Register/Register";
import FindDoctors from "../../Pages/FindDoctors/FindDoctors/FindDoctors";


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
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/findDoctors",
        element: <FindDoctors/>,
      },
    ]
  },
]);