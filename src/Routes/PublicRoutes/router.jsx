import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import LoginRegister from "../../Pages/LoginRegister/LoginRegister";

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
        path: "/login",
        element: <LoginRegister/>,
      },
    ]
  },
]);