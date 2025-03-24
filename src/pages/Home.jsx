import preetiImage from "../assets/preeti_image.jpeg"; // Import your image
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600 text-white text-center p-6">
      {/* Profile Image */}
      <img
        src={preetiImage}
        alt="Preeti Jha"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 transition-transform transform hover:scale-110"
      />

      {/* Typing Effect for Introduction */}
      <h1 className="text-4xl font-bold">Hello, I'm Preeti Jha</h1>
      <TypeAnimation
        sequence={[
          "Electronics & Communication Engineer", 1500,
          "Frontend Developer", 1500,
          "Passionate Problem Solver", 1500,
          "React.js Enthusiast", 1500
        ]}
        wrapper="p"
        className="text-xl mt-4 text-gray-300"
        repeat={Infinity}
      />

      {/* Short Bio */}
      <p className="text-lg mt-4 max-w-lg">
        I specialize in building responsive and user-friendly web applications using HTML, 
        CSS, JavaScript, and React.js. I love solving problems and continuously learning 
        new technologies to enhance my skills.
      </p>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a href="https://github.com/preetijha198" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://linkedin.com/in/erpreetijha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125" />
        </a>
        <a href="mailto:preetijha198@gmail.com">
          <FaEnvelope className="text-red-400 hover:text-red-600 transition-transform transform hover:scale-125" />
        </a>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-6">
        <a href="/resume.pdf" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all mr-4">
          View Resume
        </a>
        <a href="/contact" className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Home;
