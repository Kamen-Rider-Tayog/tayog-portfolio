import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-green-600">Tayog</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
          Aspiring Full Stack Developer | Learning Spring Boot & React 
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Building modern web applications by combining Spring Boot for robust 
          backends and React with Tailwind CSS for responsive, user-friendly frontends.
          Currently expanding Java skills into full-stack development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
            View My Work
          </button>
          <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-300">
            Download Resume
          </button>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>✅ Day 1 Complete: React + Vite + Tailwind Setup</p>
          <p>✅ Live on http://localhost:5173</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;