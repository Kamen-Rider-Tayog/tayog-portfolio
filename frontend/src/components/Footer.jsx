import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#169C78] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Brand/Info Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tayog<span className="text-[#F7CAC9]">.dev</span>
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
            <h4 className="text-lg font-semibold text-[#F7CAC9] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/90 hover:text-[#F7CAC9] hover:underline transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#F7CAC9] rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#F7CAC9] mb-4">Connect With Me</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#F7CAC9] text-lg" />
                </div>
                <p className="text-white/90">basallo.tayog@gmail.com</p>
              </div>
                <div className="flex items-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-[#F7CAC9] text-lg" />
                </div>
                <p className="text-white/90">+63 966 988 0213</p>
            </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            {/* "Built with" section */}
            <div className="text-white/70 text-sm bg-white/10 px-4 py-3 rounded-lg mt-6">
              <p>Built with: <span className="text-[#F7CAC9]">React</span> • <span className="text-[#F7CAC9]">Tailwind</span> • <span className="text-[#F7CAC9]">Vite</span></p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Centered "Made with love" */}
        <div className="text-center pt-4 pb-2">
          <p className="text-white/80 text-base">
            © {currentYear} Made with 
            <span className='inline-block transform hover:text-[#F7CAC9] hover:scale-110 transition-transform duration-200 mx-1'>❤︎</span> 
            by Tayog
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
