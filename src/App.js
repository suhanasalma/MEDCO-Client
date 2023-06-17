import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PublicRoutes/router";
import "animate.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", 
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
      )
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          localStorage.setItem("user",JSON.stringify(resObject.user))
          const user = localStorage.getItem('user')
          setUser(JSON.parse(user));
        })
        .catch((err) => {
          // console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
