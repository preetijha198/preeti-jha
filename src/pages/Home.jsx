import preetiImage from "../assets/preeti_image.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact, FaCuttlefish } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-400 to-gray-500 text-white text-center px-6 mt-10 mb-5">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={preetiImage}
          alt="Preeti Jha"
          className="w-44 h-44 rounded-full border-4 border-white shadow-xl transition-transform transform hover:scale-110"
        />
        
      </div>

      {/* Typing Effect for Introduction */}
      <h1 className="text-5xl font-bold mt-6">Hello, I'm <span className="text-blue-400">Preeti Jha</span></h1>
      <TypeAnimation
        sequence={[
          "Electronics & Communication Engineer", 1500,
          "Frontend Developer", 1500,
          "Passionate Problem Solver", 1500,
          "React.js Enthusiast", 1500
        ]}
        wrapper="p"
        className="text-2xl mt-3 text-gray-300 font-semibold"
        repeat={Infinity}
      />

      {/* Short Bio */}
      <p className="text-lg mt-4 max-w-2xl text-white">
        I specialize in building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.js. 
        I love solving problems and continuously learning new technologies to enhance my skills.
      </p>

      {/* Technical Skills Section */}
      <h2 className="text-2xl font-semibold mt-8">Technical Skills</h2>
      <div className="flex justify-center gap-6 mt-4 text-5xl">
        <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" title="HTML5" />
        <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" title="CSS3" />
        <FaJs className="text-yellow-500 hover:scale-110 transition-transform" title="JavaScript" />
        <FaReact className="text-blue-400 hover:scale-110 transition-transform" title="React.js" />
        <FaCuttlefish className="text-gray-500 hover:scale-110 transition-transform" title="C Programming" />
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a href="https://github.com/preetijha198" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <FaGithub className="text-white hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/erpreetijha/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <FaLinkedin className="text-blue-400 hover:text-blue-600" />
        </a>
        <a href="mailto:preetijha198@gmail.com" className="hover:scale-125 transition-transform">
          <FaEnvelope className="text-red-400 hover:text-red-600" />
        </a>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a 
          href="/Preeti Jha Resume FSD.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          View Resume
        </a>
        
      </div>
    </div>
  );
};

export default Home;
