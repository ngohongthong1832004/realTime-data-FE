import {
    createBrowserRouter,
} from "react-router-dom";
  
import Home from "../components/home";

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},
{
    path: "about",
    element: <div>About</div>,
},
]);

export default router;