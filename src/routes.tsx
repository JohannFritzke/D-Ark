import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home'
import { Jogress } from './pages/Jogress'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jogress*",
    element: <Jogress />,
  }
]);