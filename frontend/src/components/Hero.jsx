import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-[#F0EEE9] relative overflow-hidden mt-[50px]">

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F7CAC9]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#169C78]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-[#169C78] hover:text-[#F7CAC9] transition duration-300 cursor-pointer">Tayog</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
          Aspiring <span className="text-[#169C78] font-semibold hover:text-[#F7CAC9] transition duration-300 cursor-pointer">Full Stack Developer</span> 
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Creating modern web applications with clean architecture and responsive design.
          Currently mastering backend development with 
          <span className="text-[#169C78] font-medium hover:text-[#F7CAC9] transition duration-300 mx-1">Spring Boot</span> 
          and frontend with 
          <span className="text-[#169C78] font-medium hover:text-[#F7CAC9] transition duration-300 ml-1">React </span>and
          <span className="text-[#169C78] font-medium hover:text-[#F7CAC9] transition duration-300 ml-1">Tailwind</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-3 bg-[#169C78] text-white font-semibold rounded-lg hover:bg-[#F7CAC9] hover:text-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Projects
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-[#F7CAC9]/80 hover:text-gray-900 border-2 border-[#169C78]/30 hover:border-[#F7CAC9] transition duration-300 shadow hover:shadow-md transform hover:-translate-y-1">
            Contact Me
          </button>
        </div>

        <div className="inline-block bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-100 hover:border-[#F7CAC9] transition duration-300">
          <p className="text-gray-600 hover:text-gray-800 transition duration-300">
            Currently open to <span className="text-[#169C78] font-medium hover:text-[#F7CAC9] transition duration-300 cursor-pointer">collaboration</span> and 
            <span className="text-[#169C78] font-medium hover:text-[#F7CAC9] transition duration-300 cursor-pointer"> learning opportunities</span>
          </p>
        </div>

        {/* Minimal Tech Indicator (Optional) */}
        <div className="mt-12">
          <p className="text-gray-500 text-sm mb-3">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'Git', 'Vite'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#F7CAC9]/30 hover:text-[#169C78] hover:border-[#F7CAC9] transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
