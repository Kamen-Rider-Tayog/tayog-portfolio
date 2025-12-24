import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Snowfall from 'react-snowfall';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects.jsx';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        
        // Check if button is over footer
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const buttonBottom = window.innerHeight - 100; // Button position (bottom-6)
          
          if (buttonBottom > footerRect.top) {
            setIsOverFooter(true);
          } else {
            setIsOverFooter(false);
          }
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on mount
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
            isOverFooter 
              ? 'bg-[#F0EEE9] dark:bg-[#4ECDC4] hover:bg-[#F7CAC9] dark:hover:bg-[#3ab4ac] text-[#169C78] dark:text-gray-900 hover:text-gray-800 dark:hover:text-gray-900 border border-[#169C78]/30 dark:border-[#4ECDC4]/50' 
              : 'bg-[#169C78] hover:bg-[#F7CAC9] dark:bg-[#4ECDC4] dark:hover:bg-[#3ab4ac] text-white hover:text-gray-800 dark:text-gray-900 dark:hover:text-gray-900'
          }`}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faCaretUp} className="text-sm" />
        </button>
      )}
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0EEE9] dark:bg-gray-900 transition-colors duration-300">
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

            <Skills />

            <div id="projects" className="mb-16 scroll-mt-16">
              <Projects />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      
      <BackToTopButton />
    </div>
  );
}

export default App;