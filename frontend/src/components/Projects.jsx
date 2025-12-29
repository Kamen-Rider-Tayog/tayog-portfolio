import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with secure payment integration, user authentication, and admin dashboard. Features include cart management, order tracking, and product reviews.",
      tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JWT", "Stripe API"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
      tags: ["Spring Boot", "React", "WebSocket", "Redis", "Docker", "MongoDB"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with dark/light mode, project showcase, blog integration, and contact form. Optimized for performance and SEO.",
      tags: ["React", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "Completed"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location detection, 7-day forecast, historical data, and interactive maps. Uses multiple weather APIs.",
      tags: ["React", "Chart.js", "Mapbox", "REST API", "PWA"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "Planned"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "Social platform for sharing recipes with image uploads, user ratings, meal planning, and grocery list generation.",
      tags: ["Spring Boot", "React", "Cloudinary", "MySQL", "OAuth2"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout routines, progress analytics, calorie tracking, and social features.",
      tags: ["React Native", "Spring Boot", "GraphQL", "Firebase", "JWT"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "Planned"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Featured <span className="text-[#169C78] dark:text-[#4ECDC4]">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development skills and modern web technologies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#169C78]/10 to-[#F7CAC9]/10 dark:from-[#4ECDC4]/10 dark:to-[#F7CAC9]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-[#169C78]/40 dark:hover:border-[#4ECDC4]/40 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#169C78]/20 to-[#F7CAC9]/20 dark:from-[#4ECDC4]/20 dark:to-[#F7CAC9]/10 rounded-xl flex items-center justify-center">
                  <span className="text-[#169C78] dark:text-[#4ECDC4] font-bold text-xl">#{project.id}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : project.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                }`}>
                  {project.status}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#169C78] dark:group-hover:text-[#4ECDC4] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>

              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                variants={containerVariants}
              >
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    variants={tagVariants}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-[#F7CAC9]/20 dark:hover:bg-[#F7CAC9]/10 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-[#169C78] dark:hover:bg-[#4ECDC4] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveDemo}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-[#169C78] dark:hover:bg-[#4ECDC4] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#169C78] dark:text-[#4ECDC4] font-medium group-hover:text-[#F7CAC9] dark:group-hover:text-[#F7CAC9] transition-colors"
                >
                  View Details
                  <FiChevronRight className="ml-1 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <button className="px-8 py-3 bg-gradient-to-r from-[#169C78] to-[#169C78]/80 dark:from-[#4ECDC4] dark:to-[#4ECDC4]/80 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#169C78]/20 dark:hover:shadow-[#4ECDC4]/20 transition-all duration-300 transform hover:-translate-y-1">
          View All Projects
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;