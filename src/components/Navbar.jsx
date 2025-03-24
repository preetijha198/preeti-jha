import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Preeti Jha</h1>
        <div>
          <Link className="text-white mx-2" to="/">Home</Link>
          <Link className="text-white mx-2" to="/about">About</Link>
          <Link className="text-white mx-2" to="/projects">Projects</Link>
          <Link className="text-white mx-2" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
