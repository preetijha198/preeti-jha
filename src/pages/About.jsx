import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCuttlefish, FaBrain, FaUsers, FaClock, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-8 text-center bg-gray-600 text-white min-h-screen mt-[60px]">
      {/* About Me Section */}
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg">
        I am an Electronics and Communication Engineer who transitioned into Web Development.  
        Passionate about coding, I specialize in building responsive and user-friendly web applications.
        I enjoy problem-solving, collaborating on projects, and continuously learning new technologies.
      </p>

      {/* Tech Stack Section */}
      <h3 className="text-3xl font-semibold mt-10">Tech Stack</h3>
      <div className="flex justify-center gap-8 mt-6 text-6xl">
        <FaHtml5 className="text-orange-500" title="HTML5" />
        <FaCss3Alt className="text-blue-500" title="CSS3" />
        <FaJs className="text-yellow-500" title="JavaScript" />
        <FaReact className="text-blue-400" title="React.js" />
        <FaCuttlefish className="text-gray-500" title="C Programming" />
      </div>

      {/* Soft Skills Section */}
      <h3 className="text-3xl font-semibold mt-10">Soft Skills</h3>
      <div className="flex justify-center gap-8 mt-6 text-5xl">
        <div className="flex flex-col items-center">
          <FaUsers className="text-green-400" title="Teamwork" />
          <p className="text-lg mt-2">Teamwork</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBrain className="text-red-400" title="Problem Solving" />
          <p className="text-lg mt-2">Problem Solving</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-purple-400" title="Time Management" />
          <p className="text-lg mt-2">Time Management</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLightbulb className="text-yellow-400" title="Adaptability" />
          <p className="text-lg mt-2">Adaptability</p>
        </div>
      </div>
    </div>
  );
};

export default About;
