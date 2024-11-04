import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home'
import { Jogress } from './pages/Jogress'
import { Armor } from "./pages/Armor";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jogress",
    element: <Jogress />,
  },
  {
    path:"/armor",
    element:<Armor/>
  }
]);