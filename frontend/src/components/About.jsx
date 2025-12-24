import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <span className="w-3 h-8 bg-[#169C78] rounded-full mr-4"></span>
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Passionate developer learning full-stack web development with a focus on 
          Spring Boot for backend with React and Tailwind for frontend.
        </p>
        <div className="bg-[#F7CAC9]/10 dark:bg-[#F7CAC9]/5 p-4 rounded-lg border border-[#F7CAC9]/30 dark:border-[#F7CAC9]/10 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 italic">
            "Currently expanding my skills in modern web technologies and building portfolio projects."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;