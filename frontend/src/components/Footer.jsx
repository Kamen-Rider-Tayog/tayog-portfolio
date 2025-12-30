import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const heartVariants = {
    beat: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const technologies = ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'];

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#169C78] dark:bg-gray-900 text-white relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Info Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Tayog<span className="text-[#F7CAC9]">.dev</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 mb-4"
            >
              Aspiring Full Stack Developer building modern web applications with Spring Boot and React.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 text-sm italic border-l-3 border-[#F7CAC9] pl-3 py-1"
            >
              "Learning never exhausts the mind." - Leonardo da Vinci
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-semibold text-[#F7CAC9] mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/90 hover:text-[#F7CAC9] transition duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-2 h-2 bg-[#F7CAC9] rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                    />
                    {item}
                    <motion.span
                      className="ml-2 opacity-0 group-hover:opacity-100"
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg font-semibold text-[#F7CAC9] mb-4"
            >
              Connect With Me
            </motion.h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#F7CAC9] text-lg" />
                </motion.div>
                <p className="text-white/90">basallo.tayog@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#F7CAC9] text-lg" />
                </motion.div>
                <p className="text-white/90">+63 966 988 0213</p>
              </motion.div>

              <div className="flex space-x-4 mt-6">
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    backgroundColor: "#ffffff30"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    backgroundColor: "#ffffff30"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>

            {/* "Built with" section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-white/70 text-sm bg-white/10 px-4 py-3 rounded-lg mt-6"
            >
              <p>Built with:
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="text-[#F7CAC9] mx-1 font-medium"
                  >
                    {tech}{index < technologies.length - 1 ? ' •' : ''}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-t border-white/20 my-8"
        />

        {/* Centered "Made with love" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <p className="text-white/80 text-base flex items-center justify-center">
            © {currentYear} Made with
            <motion.span
              variants={heartVariants}
              animate="beat"
              className="inline-block mx-2"
            >
              <FontAwesomeIcon icon={faHeart} className="text-[#F7CAC9]" />
            </motion.span>
            by Tayog Basallo
          </p>
          <p className="text-white/60 text-sm mt-2">
            All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;