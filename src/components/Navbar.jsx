import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Preeti Jha</h1>
        <div>
          <Link className="text-white mx-2 hover:text-gray-400" to="/">Home</Link>
          <Link className="text-white mx-2 hover:text-gray-400" to="/about">About</Link>
          <Link className="text-white mx-2 hover:text-gray-400" to="/projects">Projects</Link>
          <Link className="text-white mx-2 hover:text-gray-400" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;