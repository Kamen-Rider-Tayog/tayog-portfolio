import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayout, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const skills = [
    { icon: <FiCode />, name: "Frontend", description: "React, Tailwind CSS, TypeScript" },
    { icon: <FiServer />, name: "Backend", description: "Spring Boot, Node.js, Express" },
    { icon: <FiDatabase />, name: "Database", description: "PostgreSQL, MongoDB, Redis" },
    { icon: <FiLayout />, name: "UI/UX", description: "Figma, Responsive Design" },
    { icon: <FiUsers />, name: "Collaboration", description: "Git, Agile, Teamwork" },
    { icon: <FiAward />, name: "Learning", description: "Always exploring new tech" }
  ];

  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "1000+", label: "Code Commits" },
    { value: "50+", label: "Technologies Learned" },
    { value: "24/7", label: "Passion Level" }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-16 px-4 overflow-hidden"> {/* Added overflow-hidden here */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative" 
      >
        {/* Background decorative elements - FIXED VERSION */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#169C78]/5 to-[#F7CAC9]/5 dark:from-[#4ECDC4]/5 dark:to-[#F7CAC9]/3 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-tr from-[#169C78]/5 to-[#F7CAC9]/5 dark:from-[#4ECDC4]/5 dark:to-[#F7CAC9]/3 rounded-full blur-2xl -z-10"></div>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 border border-gray-100 dark:border-gray-700 backdrop-blur-sm overflow-hidden" 
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-8"
              >
                <div className="relative">
                  <div className="w-3 h-10 lg:w-4 lg:h-12 bg-gradient-to-b from-[#169C78] to-[#4ECDC4] dark:from-[#4ECDC4] dark:to-[#169C78] rounded-full mr-3 lg:mr-4"></div>
                  <div className="absolute inset-0 w-3 h-10 lg:w-4 lg:h-12 bg-gradient-to-b from-[#F7CAC9] to-transparent opacity-50 rounded-full mr-3 lg:mr-4 animate-pulse"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                  About <span className="text-[#169C78] dark:text-[#4ECDC4]">Me</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                I'm a passionate full-stack developer specializing in creating modern web applications 
                with clean code and intuitive user experiences. My expertise spans from backend development 
                with Spring Boot to dynamic frontends with React and Tailwind CSS.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Currently, I'm focused on expanding my skills in cloud technologies, microservices architecture, 
                and building scalable applications. I believe in continuous learning and staying updated with 
                the latest web development trends.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-4 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-3 lg:p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <div className="text-xl lg:text-2xl font-bold text-[#169C78] dark:text-[#4ECDC4]">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="lg:sticky lg:top-8"
              >
                <div className="bg-gradient-to-br from-[#F7CAC9]/20 to-[#169C78]/10 dark:from-[#F7CAC9]/10 dark:to-[#4ECDC4]/20 p-4 lg:p-6 rounded-2xl border border-[#F7CAC9]/30 dark:border-[#F7CAC9]/20 mb-6 lg:mb-8 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4 text-[#169C78] dark:text-[#4ECDC4] animate-bounce">💡</div>
                  <p className="text-gray-700 dark:text-gray-300 italic text-base lg:text-lg leading-relaxed">
                    "Building the web one component at a time, with a focus on clean code, 
                    performance, and user-centric design."
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3 lg:space-y-4"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-white mb-3 lg:mb-4">Core Skills</h3>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5, backgroundColor: 'rgba(247, 202, 201, 0.1)' }}
                      className="flex items-center p-2 lg:p-3 rounded-lg hover:bg-[#F7CAC9]/10 dark:hover:bg-[#F7CAC9]/5 transition-all duration-300 cursor-default group"
                    >
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#169C78]/20 to-[#F7CAC9]/20 dark:from-[#4ECDC4]/20 dark:to-[#F7CAC9]/10 rounded-lg flex items-center justify-center mr-3 lg:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                        <span className="text-[#169C78] dark:text-[#4ECDC4] text-base lg:text-lg">
                          {skill.icon}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-800 dark:text-white text-sm lg:text-base truncate">{skill.name}</div>
                        <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 truncate">{skill.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#169C78] to-[#4ECDC4] dark:from-[#4ECDC4] dark:to-[#169C78] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 lg:px-6 py-2 lg:py-3 bg-transparent border border-[#169C78] dark:border-[#4ECDC4] text-[#169C78] dark:text-[#4ECDC4] font-medium rounded-full hover:bg-[#169C78]/10 dark:hover:bg-[#4ECDC4]/10 transition-all duration-300 text-sm lg:text-base"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;