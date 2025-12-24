import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-300">

      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-light/20 dark:bg-secondary-dark/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
          Hi, I'm <span className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 cursor-pointer">Tayog</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-text-secondary-light dark:text-text-secondary-dark mb-8 font-medium">
          Aspiring <span className="text-primary-light dark:text-primary-dark font-semibold hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 cursor-pointer">Full Stack Developer</span> 
        </h2>
        
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-10 max-w-2xl mx-auto leading-relaxed">
          Creating modern web applications with clean architecture and responsive design.
          Currently mastering backend development with 
          <span className="text-primary-light dark:text-primary-dark font-medium hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 mx-1">Spring Boot</span> 
          and frontend with 
          <span className="text-primary-light dark:text-primary-dark font-medium hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 ml-1">React </span>and
          <span className="text-primary-light dark:text-primary-dark font-medium hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 ml-1">Tailwind</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Projects
          </button>
          <button className="px-8 py-3 bg-card-light dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark font-semibold rounded-lg hover:bg-secondary-light/80 dark:hover:bg-secondary-dark/80 hover:text-text-primary-light dark:hover:text-text-primary-dark border-2 border-primary-light/30 dark:border-primary-dark/30 hover:border-secondary-light dark:hover:border-secondary-dark transition duration-300 shadow hover:shadow-md transform hover:-translate-y-1">
            Contact Me
          </button>
        </div>

        <div className="inline-block bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-border-light dark:border-border-dark hover:border-secondary-light dark:hover:border-secondary-dark transition duration-300">
          <p className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition duration-300">
            Currently open to <span className="text-primary-light dark:text-primary-dark font-medium hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 cursor-pointer">collaboration</span> and 
            <span className="text-primary-light dark:text-primary-dark font-medium hover:text-secondary-light dark:hover:text-secondary-dark transition duration-300 cursor-pointer"> learning opportunities</span>
          </p>
        </div>

        {/* Minimal Tech Indicator */}
        <div className="mt-12">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-3">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'Git', 'Vite'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card-light/50 dark:bg-card-dark/50 text-text-primary-light dark:text-text-primary-dark rounded-full text-sm font-medium border border-border-light dark:border-border-dark hover:bg-secondary-light/30 dark:hover:bg-primary-dark/20 hover:text-primary-light dark:hover:text-primary-dark hover:border-secondary-light dark:hover:border-primary-dark transition duration-300"
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