import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-5 fixed bottom-0 left-0 w-full shadow-md flex justify-between items-center px-10 text-sm">
      {/* GitHub Profile Link - Left Side */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/preetijha198"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 flex items-center gap-2"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>
      </div>

      {/* Copyright - Center */}
      <p className="text-xs">© 2025 Preeti Jha. All rights reserved.</p>

      {/* Projects Section - Right Side */}
      <div className="flex gap-4">
        <a
          href="https://masaiquizapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          🎯 Quiz App
        </a>
        <a
          href="https://employeemanagementappp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          🏢 Employee Management System
        </a>
      </div>
    </footer>
  );
};

export default Footer;
