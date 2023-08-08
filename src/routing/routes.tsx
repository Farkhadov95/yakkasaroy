import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/about", element: <About /> },
]);

export default router;
