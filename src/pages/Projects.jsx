import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      description: `
        Developed user-friendly front-end components of the Quiz App using React.js to ensure engaging user interaction.
        Implemented dynamic question and answer handling logic with real-time feedback on correctness.
        Utilized localStorage for persistent leaderboard functionality, retaining player scores after page refresh.
        Optimized the application's performance and responsiveness, enhancing the user experience across devices.
        Collaborated using Git for version control to manage code iterations and ensure code quality.
      `,
      github: "https://github.com/preetijha198/Quiz_App_Project",
      live: "https://masaiquizapp.netlify.app/",
    },
    {
      title: "Employee Management System",
      description: `
        Built a user-friendly frontend web application using React.js for managing employee data efficiently.
        Designed features for adding, updating, and deleting employee information, along with a search and filter capability.
        Implemented responsive design using CSS to ensure seamless user experience across various devices.
        Used Git for version control and collaborated with team members for regular updates.
        Participated in code reviews and debugging to ensure application stability and reliability.
      `,
      github: "https://github.com/preetijha198/Employee-Management-System",
      live: "https://employeemanagementappp.netlify.app/",
    },
  ];

  return (
    <div className="p-8 text-center mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm text-left">{project.description}</p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
