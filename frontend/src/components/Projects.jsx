import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with Spring Boot backend and React frontend.",
      tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates.",
      tags: ["Spring Boot", "React", "WebSocket", "Redis"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills.",
      tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"]
    }
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        <span className="text-[#169C78]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#169C78]/30 dark:hover:border-[#169C78]/50"
          >
            <div className="w-12 h-12 bg-[#169C78]/10 dark:bg-[#169C78]/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-[#169C78] dark:text-[#169C78] font-bold">#{project.id}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#F7CAC9]/20 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;