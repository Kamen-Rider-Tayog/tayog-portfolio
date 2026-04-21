import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronRight, FiStar, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pet Store E-Commerce ",
      description: "A full-stack e-commerce application with secure payment integration, user authentication, and admin dashboard. Features include cart management, order tracking, and product reviews.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Stripe API"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "Completed",
      stars: 2,
      color: "#169C78"
    },
    {
      id: 2,
      title: "Hello Code",
      description: "A website for students that want to learn basics of programming.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "MySQL"],
      github: "https://github.com",
      liveDemo: "https://demo.com",
      status: "In Progress",
      stars: 28,
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Modern responsive portfolio with dark/light mode, project showcase, blog integration, and contact form. Optimized for performance and SEO.",
      tags: ["React", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS"],
      github: "https://github.com/Kamen-Rider-Tayog/tayog-portfolio",
      liveDemo: "https://kamen-rider-tayog.github.io/tayog-portfolio/",
      status: "In Progress",
      stars: 1,
      color: "#169C78"
    },
    {
      id: 4,
      title: "LA ANTORCHA FLAME",
      description: "An e-commerce platform for university plans featuring interactive 3D product viewing. Built with HTML, CSS, JavaScript, and Three.js for immersive product visualization and seamless shopping experience.",
      tags: ["HTML5", "CSS3", "JavaScript", "Three.js", "WebGL", "3D Modeling"],
      github: "https://github.com/Kamen-Rider-Tayog/LA-ANTORCHA-FLAME",
      liveDemo: "https://kamen-rider-tayog.github.io/LA-ANTORCHA-FLAME/",
      status: "Active",
      stars: 1,
      color: "#4ECDC4"
    },
    {
    id: 5,
    title: "Magellan Adventure Web Game",
    description: "A 2D top-down adventure web game built with JavaScript for GNED 14 project. Features exploration mechanics, interactive objects, and engaging gameplay elements.",
    tags: ["JavaScript", "HTML5", "CSS3", "2D Game", "Canvas API"],
    github: "https://github.com/Kamen-Rider-Tayog/Magellan-Adventure-Web-Game",
    liveDemo: "https://kamen-rider-tayog.github.io/Magellan-Adventure-Web-Game/",
    status: "In Progress",
    stars: 0,
    color: "#169C78"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const titleVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 500
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
        stiffness: 300
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#169C78",
      color: "#FFFFFF",
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="py-20 px-4 dark:bg-gray-900 transition-colors duration-300">
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-5xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Featured <span className="text-[#169C78] dark:text-[#4ECDC4]">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
        >
          A collection of my recent work showcasing full-stack development skills
        </motion.p>
        
        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-[#169C78] dark:bg-[#4ECDC4] mx-auto rounded-full"
        />
      </motion.div>

      {/* Projects Grid with animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setActiveProject(project.id)}
            onBlur={() => setActiveProject(null)}
            className="relative group"
          >
            {/* Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col hover:shadow-xl">
              
              {/* Project Number */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-3 -left-3 w-14 h-14 rounded-xl flex items-center justify-center shadow-md z-10"
                style={{ backgroundColor: project.color }}
              >
                <span className="text-white font-bold text-lg">#{project.id}</span>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-medium shadow-md ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                    : project.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400'
                }`}
              >
                {project.status}
              </motion.div>

              {/* Star Count */}
              <div className="flex justify-end mb-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex items-center text-[#F0EEE9] bg-[#FBB6CE] dark:text-[#374151] dark:bg-[#FBB6CE] px-2 py-1 rounded-full"
                >
                  <FiStar className="mr-1" />
                  <span className="text-sm font-medium">{project.stars}</span>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                variants={titleVariants}
                className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-[#169C78] dark:group-hover:text-[#4ECDC4] transition-colors duration-300 cursor-pointer"
                style={{ 
                  color: hoveredCard === project.id ? project.color : '' 
                }}
              >
                {project.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 mb-6 flex-grow"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    variants={tagVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto"
              >
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:text-white"
                    aria-label="GitHub Repository"
                    style={{ 
                      backgroundColor: hoveredCard === project.id ? project.color : '' 
                    }}
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:text-white"
                    aria-label="Live Demo"
                    style={{ 
                      backgroundColor: hoveredCard === project.id ? project.color : '' 
                    }}
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#169C78] dark:text-[#4ECDC4] font-medium group-hover:text-[#169C78] dark:group-hover:text-[#4ECDC4] transition-colors"
                  style={{ 
                    color: hoveredCard === project.id ? project.color : '' 
                  }}
                >
                  View Details
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FiChevronRight className="ml-1 w-5 h-5" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            y: -3,
            backgroundColor: "#169C78",
            boxShadow: "0 10px 25px rgba(22, 156, 120, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-[#169C78] dark:bg-[#4ECDC4] text-white font-medium rounded-full shadow-lg transition-all duration-300 text-lg"
        >
          <span className="flex items-center justify-center">
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects;