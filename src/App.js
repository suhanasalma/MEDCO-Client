import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PublicRoutes/router";
import "animate.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
