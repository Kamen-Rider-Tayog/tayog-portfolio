import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light dark:bg-card-dark text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Brand/Info Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tayog<span className="text-secondary-light dark:text-secondary-dark">.dev</span>
            </h3>
            <p className="text-white/90 mb-4">
              Aspiring Full Stack Developer building modern web applications with Spring Boot and React.
            </p>
            <p className="text-white/70 text-sm italic">
              "Learning never exhausts the mind." - Leonardo da Vinci
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/90 hover:text-secondary-light dark:hover:text-secondary-dark hover:underline transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary-light dark:bg-secondary-dark rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark mb-4">Connect With Me</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-secondary-light dark:text-secondary-dark text-lg" />
                </div>
                <p className="text-white/90">basallo.tayog@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-secondary-light dark:text-secondary-dark text-lg" />
                </div>
                <p className="text-white/90">+63 966 988 0213</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            {/* "Built with" section */}
            <div className="text-white/70 text-sm bg-white/10 dark:bg-gray-700/30 px-4 py-3 rounded-lg mt-6">
              <p>Built with: <span className="text-secondary-light dark:text-secondary-dark">React</span> • <span className="text-secondary-light dark:text-secondary-dark">Tailwind</span> • <span className="text-secondary-light dark:text-secondary-dark">Vite</span></p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 dark:border-gray-600 my-6"></div>

        {/* Centered "Made with love" */}
        <div className="text-center pt-4 pb-2">
          <p className="text-white/80 text-base">
            © {currentYear} Made with 
            <span className='inline-block transform hover:text-secondary-light dark:hover:text-secondary-dark hover:scale-110 hover:cursor-pointer transition-transform duration-200 mx-1'>❤︎</span> 
            by Tayog
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;