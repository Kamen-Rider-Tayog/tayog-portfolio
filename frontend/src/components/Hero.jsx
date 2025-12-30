import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  const blobVariants = {
    animate: {
      x: [0, 30, 0],
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const techStack = ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'Git', 'Vite'];

  return (
    <section className="min-h-[calc(100vh+25vh)] flex flex-col justify-center items-center px-4 py-8 bg-[#F0EEE9] dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-[#F7CAC9]/20 dark:bg-[#F7CAC9]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#169C78]/10 dark:bg-[#4ECDC4]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#169C78]/5 dark:bg-[#4ECDC4]/5 rounded-full mix-blend-multiply filter blur-xl opacity-50"
      />

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl relative z-10"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Hi, I'm{' '}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-[#169C78] dark:text-[#4ECDC4] inline-block cursor-pointer"
          >
            Tayog
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium h-12 inline-flex"
        >
          Aspiring&nbsp;{' '}
          <span className="text-[#169C78] dark:text-[#4ECDC4] font-semibold">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Spring Boot Developer', 'React Developer', 'Web Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Creating modern web applications with clean architecture and responsive design.
          Currently mastering backend development with{' '}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-[#169C78] dark:text-[#4ECDC4] font-medium inline-block cursor-pointer"
          >
            Spring Boot
          </motion.span>{' '}
          and frontend with{' '}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-[#169C78] dark:text-[#4ECDC4] font-medium inline-block cursor-pointer"
          >
            React
          </motion.span>{' '}
          and{' '}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-[#169C78] dark:text-[#4ECDC4] font-medium inline-block cursor-pointer"
          >
            Tailwind
          </motion.span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#169C78] dark:bg-[#4ECDC4] text-white font-semibold rounded-lg shadow-lg"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded-lg border-2 border-[#169C78]/30 dark:border-[#4ECDC4]/30 shadow hover:shadow-md"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Current Status */}
        <motion.div
          variants={itemVariants}
          className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-200 dark:border-gray-700 mb-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Currently open to{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-[#169C78] dark:text-[#4ECDC4] font-medium cursor-pointer"
            >
              collaboration
            </motion.span>{' '}
            and{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-[#169C78] dark:text-[#4ECDC4] font-medium cursor-pointer"
            >
              learning opportunities
            </motion.span>
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-600 dark:text-gray-300 text-sm mb-3"
          >
            Technologies I work with:
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;