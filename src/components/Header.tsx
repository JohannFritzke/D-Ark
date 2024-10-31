import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4 flex items-center justify-center flex-col">
      <div className="flex">
        <img src={logo} alt="" className="w-20 bg-gray-800 rounded-s-lg" />
        <div className="text-xl font-bold bg-gray-800 h-20 w-60 flex items-center rounded-e-lg">
          <span className="text-orange-500">Dawn</span>
          <span>/</span>
          <span className="text-purple-700">Dusk</span>
          <span className="pl-1">Evolutions</span>
        </div>
      </div>
      <div className="flex gap-4 pt-2 font-bold underline">
        <Link to="/">Home</Link>
        <Link to="/jogress">Jogress</Link>
      </div>
    </div>
  );
}
