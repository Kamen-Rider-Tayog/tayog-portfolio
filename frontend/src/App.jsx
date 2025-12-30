import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Snowfall from 'react-snowfall';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects.jsx';
import BackToTop from './components/BackToTop'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0EEE9] dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Snowfall Effect - Optional */}
      {false && ( // Change to true to enable snowfall
        <Snowfall 
          color="#F7CAC9"  
          snowflakeCount={100}  
          speed={[0.5, 3]}       
          wind={[-0.5, 5.0]}     
          radius={[1.0, 4.0]}    
          rotationSpeed={[-1, 1]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1,  
          }}
        />
      )}

      <Navbar />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            
            <div id="about" className="mb-16 scroll-mt-16">
              <About />
            </div>

            <div className="mb-16">
              <Skills />
            </div>

            <div id="projects" className="scroll-mt-16">
              <Projects />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      
      <BackToTop />
    </div>
  );
}

export default App;