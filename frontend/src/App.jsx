import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';;
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer';

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  // Show button when page is scrolled down
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
              ? 'bg-[#F0EEE9] hover:bg-[#F7CAC9] text-[#169C78] hover:text-gray-800 border border-[#169C78]/30' 
              : 'bg-[#169C78] hover:bg-[#F7CAC9] text-white hover:text-gray-800'
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
    <div className="min-h-screen flex flex-col bg-[#F0EEE9]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* About Section */}
            <div id="about" className="mb-16 scroll-mt-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-8 bg-[#169C78] rounded-full mr-4"></span>
                  About Me
                </h2>
                <p className="text-gray-600 mb-6">
                  Passionate developer learning full-stack web development with a focus on 
                  Spring Boot for backend with React and Tailwind for frontend.
                </p>
                <div className="bg-[#F7CAC9]/10 p-4 rounded-lg border border-[#F7CAC9]/30">
                  <p className="text-gray-700 italic">
                    "Currently expanding my skills in modern web technologies and building portfolio projects."
                  </p>
                </div>
              </div>
            </div>

            <div id="projects" className="mb-16 scroll-mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                <span className="text-[#169C78]">Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-100 hover:border-[#169C78]/30"
                  >
                    <div className="w-12 h-12 bg-[#169C78]/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-[#169C78] font-bold">#{num}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Project {num}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Spring Boot + React application showcasing full-stack development skills.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#F7CAC9]/20 text-gray-700 rounded-full text-sm">
                        Spring Boot
                      </span>
                      <span className="px-3 py-1 bg-[#F7CAC9]/20 text-gray-700 rounded-full text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-[#F7CAC9]/20 text-gray-700 rounded-full text-sm">
                        Tailwind
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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