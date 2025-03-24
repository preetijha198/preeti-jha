import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Contact Heading */}
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>

        {/* Email */}
        <div className="flex items-center justify-center mt-6">
          <FaEnvelope className="text-red-500 text-xl mr-2" />
          <a href="mailto:preetijha198@gmail.com" className="text-blue-500 hover:underline">
            preetijha198@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center mt-4">
          <FaGithub className="text-gray-800 text-xl mr-2" />
          <a 
            href="https://github.com/preetijha198" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            github.com/preetijha198
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center mt-4">
          <FaLinkedin className="text-blue-600 text-xl mr-2" />
          <a 
            href="https://linkedin.com/in/erpreetijha/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/erpreetijha
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a 
            href="/Preeti Jha Resume FSD.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            <FaFileDownload className="mr-2" /> View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
