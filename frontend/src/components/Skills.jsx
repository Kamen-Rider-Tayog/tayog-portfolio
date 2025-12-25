import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '../hooks/useTheme';

// Solid icons
import { 
  faDesktop, 
  faServer, 
  faTools,
  faCode, 
  faPlug, 
  faBolt,
  faXmark,
  faCalendarAlt,
  faProjectDiagram,
  faLightbulb,
  faDatabase,
  faPalette,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import { 
  faReact,
  faJsSquare,
  faCss3Alt,
  faJava,
  faGitAlt,
  faFigma,
  faNodeJs,
  faPython,
  faPhp,
  faDiscord,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const { isDarkMode } = useTheme();
  
  const primaryColor = isDarkMode ? '#4ECDC4' : '#169C78';
  const primaryColorClass = isDarkMode ? 'text-primary-dark' : 'text-primary-light';
  const primaryBgColor = isDarkMode ? 'bg-primary-dark' : 'bg-primary-light';
  const secondaryColor = isDarkMode ? '#FBB6CE' : '#F7CAC9';
  const iconBgColorClass = isDarkMode ? 'bg-gray-700' : 'bg-background-light';

  // Skill data
  const skills = {
    frontend: [
      { 
        name: 'React', 
        level: 20, 
        icon: faReact,
        description: 'Currently learning React fundamentals, components, and hooks.',
        experience: 'Learning',
        projects: ['Portfolio Site'],
        tip: 'Focus on: Components, State, Props, Hooks'
      },
      { 
        name: 'JavaScript', 
        level: 55, 
        icon: faJsSquare,
        description: 'Comfortable with ES6+ features, DOM manipulation, and basic async programming.',
        experience: 'Intermediate',
        projects: ['Web Applications', 'Interactive Features'],
        tip: 'Practice: Async/Await, Array Methods, ES6+'
      },
      { 
        name: 'Tailwind CSS', 
        level: 40, 
        icon: faCss3Alt,
        description: 'Learning utility-first CSS framework for responsive design.',
        experience: 'Getting Started',
        projects: ['Current Portfolio'],
        tip: 'Master: Responsive Utilities, Flexbox, Grid'
      },
      { 
        name: 'HTML/CSS', 
        level: 90, 
        icon: faCode,
        description: 'Strong foundation in semantic HTML5 and modern CSS3 with responsive design.',
        experience: 'Advanced',
        projects: ['Multiple Websites', 'Layouts'],
        tip: 'Expert: Grid, Flexbox, Animations'
      },
      { 
        name: 'Three.js', 
        level: 3, 
        icon: faCode,
        description: 'Just starting to explore 3D graphics in the browser.',
        experience: 'Just Started',
        projects: ['Learning 3D Basics'],
        tip: 'Begin with: Basic 3D concepts, scene setup'
      },
    ],
    backend: [
      { 
        name: 'Java', 
        level: 75, 
        icon: faJava,
        description: 'Proficient in object-oriented programming and Java fundamentals.',
        experience: 'Intermediate/Advanced',
        projects: ['University Projects', 'Algorithms'],
        tip: 'Next: Spring Framework, Design Patterns'
      },
      { 
        name: 'Spring Boot', 
        level: 15, 
        icon: faServer,
        description: 'Beginning to learn Spring Boot for backend development.',
        experience: 'Just Started',
        projects: ['Learning Projects'],
        tip: 'Start with: REST Controllers, Dependency Injection'
      },
      { 
        name: 'REST APIs', 
        level: 50, 
        icon: faPlug,
        description: 'Understanding REST principles and basic API consumption.',
        experience: 'Learning',
        projects: ['API Integration Projects'],
        tip: 'Learn: HTTP Methods, Status Codes, JSON'
      },
      { 
        name: 'Node.js', 
        level: 30, 
        icon: faNodeJs,
        description: 'Learning Node.js for server-side JavaScript development.',
        experience: 'Beginner',
        projects: ['Basic APIs', 'CLI Tools'],
        tip: 'Focus on: NPM, Express.js, File System'
      },
      { 
        name: 'Python', 
        level: 40, 
        icon: faPython,
        description: 'Basic Python programming for scripting and automation.',
        experience: 'Beginner',
        projects: ['Scripts', 'Data Processing'],
        tip: 'Learn: Libraries, Data Structures, Automation'
      },
    ],
    programming: [
      { 
        name: 'JavaScript', 
        level: 55, 
        icon: faJsSquare,
        description: 'Proficient in ES6+ features, DOM manipulation, and async programming.',
        experience: 'Intermediate',
        projects: ['Web Applications', 'Scripts'],
        tip: 'Master: Async/Await, ES6+ Features, Patterns'
      },
      { 
        name: 'Python', 
        level: 40, 
        icon: faPython,
        description: 'Comfortable with Python for scripting, automation, and basic applications.',
        experience: 'Beginner/Intermediate',
        projects: ['Scripts', 'Automation Tools'],
        tip: 'Learn: Libraries, OOP, Data Structures'
      },
      { 
        name: 'Java', 
        level: 75, 
        icon: faJava,
        description: 'Strong object-oriented programming skills with Java.',
        experience: 'Intermediate/Advanced',
        projects: ['University Projects', 'Algorithms'],
        tip: 'Focus on: Design Patterns, Spring Framework'
      },
      { 
        name: 'C++', 
        level: 20, 
        icon: faCode,
        description: 'Basic understanding of C++ for algorithms and system programming.',
        experience: 'Beginner',
        projects: ['Algorithms', 'Learning Projects'],
        tip: 'Start with: Pointers, Memory Management, OOP'
      },
      { 
        name: 'PHP', 
        level: 15, 
        icon: faPhp,
        description: 'Starting to learn PHP for web development.',
        experience: 'Just Started',
        projects: ['Learning Projects'],
        tip: 'Begin with: Syntax, Forms, Basic Web Apps'
      },
    ],
    tools: [
      { 
        name: 'Git', 
        level: 30, 
        icon: faGitAlt,
        description: 'Basic version control with Git for personal projects.',
        experience: 'Basic',
        projects: ['All Coding Projects'],
        tip: 'Practice: Branching, Pull Requests, Merge Conflicts'
      },
      { 
        name: 'VS Code', 
        level: 70, 
        icon: faCode,
        description: 'Primary code editor with essential extensions for development.',
        experience: 'Comfortable',
        projects: ['All Development Work'],
        tip: 'Explore: Extensions, Keyboard Shortcuts, Debugging'
      },
      { 
        name: 'Vite', 
        level: 30, 
        icon: faBolt,
        description: 'Using Vite for modern frontend development workflows.',
        experience: 'Learning',
        projects: ['React Projects'],
        tip: 'Learn: Project Setup, Hot Module Replacement'
      },
      { 
        name: 'Figma', 
        level: 60, 
        icon: faFigma,
        description: 'Basic UI/UX design and prototyping for project planning.',
        experience: 'Intermediate',
        projects: ['Portfolio Design', 'Wireframes'],
        tip: 'Try: Components, Auto Layout, Prototyping'
      },
      { 
        name: 'MySQL', 
        level: 40, 
        icon: faDatabase,
        description: 'Basic SQL database management with MySQL.',
        experience: 'Beginner/Intermediate',
        projects: ['Database Projects'],
        tip: 'Learn: SQL Queries, Joins, Normalization'
      },
      { 
        name: 'SQL Server', 
        level: 5, 
        icon: faDatabase,
        description: 'Starting to learn Microsoft SQL Server.',
        experience: 'Just Started',
        projects: ['Learning Projects'],
        tip: 'Begin with: T-SQL Basics, Management Studio'
      },
      { 
        name: 'IntelliJ IDEA', 
        level: 40, 
        icon: faTools,
        description: 'Using IntelliJ for Java development.',
        experience: 'Intermediate',
        projects: ['Java Projects'],
        tip: 'Learn: Debugging, Refactoring, Plugins'
      },
      { 
        name: 'NetBeans', 
        level: 30, 
        icon: faTools,
        description: 'Familiar with NetBeans for Java development.',
        experience: 'Basic',
        projects: ['University Projects'],
        tip: 'Master: Project Management, GUI Builder'
      },
      { 
        name: 'Discord', 
        level: 80, 
        icon: faDiscord,
        description: 'Using Discord for team communication and community engagement.',
        experience: 'Advanced',
        projects: ['Team Projects', 'Communities'],
        tip: 'Explore: Bots, Integrations, Community Management'
      },
      { 
        name: 'Blender', 
        level: 10, 
        icon: faPalette,
        description: 'Starting to learn 3D modeling with Blender.',
        experience: 'Just Started',
        projects: ['Learning 3D Modeling'],
        tip: 'Begin with: Basic Modeling, Texturing, Lighting'
      },
      { 
        name: 'Zoom/Teams', 
        level: 85, 
        icon: faVideo,
        description: 'Proficient with video conferencing tools for remote collaboration.',
        experience: 'Advanced',
        projects: ['Remote Meetings', 'Online Presentations'],
        tip: 'Master: Screen Sharing, Recording, Breakout Rooms'
      },
      { 
        name: 'Microsoft Office', 
        level: 90, 
        icon: faMicrosoft,
        description: 'Advanced skills in Word, Excel, PowerPoint for documentation and analysis.',
        experience: 'Expert',
        projects: ['Documentation', 'Presentations', 'Data Analysis'],
        tip: 'Excel: PivotTables, Formulas, Charts'
      },
      { 
        name: 'Canva', 
        level: 60, 
        icon: faPalette,
        description: 'Creating graphics, presentations, and social media content.',
        experience: 'Intermediate',
        projects: ['Social Media Graphics', 'Presentations'],
        tip: 'Use: Templates, Brand Kits, Animations'
      },
    ],
  };

  const SkillBar = ({ skill }) => {
    const [isVisible, setIsVisible] = useState(false);
    const barRef = useRef(null);

    useEffect(() => {
      const currentBarRef = barRef.current;
      
      if (!currentBarRef) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
      );
      
      observer.observe(currentBarRef);
      
      return () => {
        observer.unobserve(currentBarRef);
      };
    }, []);

    return (
      <div ref={barRef} className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            backgroundColor: secondaryColor,
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}
        ></div>
      </div>
    );
  };

  // Modal functions
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedSkill(null), 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSkillModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeSkillModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-16 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Technical <span className={primaryColorClass}>Skills</span>
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
            <span className="block mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">Click on any skill for detailed information</span>
          </p>
        </div>

        {/* Skills Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Row 1: Frontend & Backend */}
          
          {/* Frontend Skills */}
          <div className="h-80 bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 border border-border-light dark:border-border-dark hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${iconBgColorClass}`}>
                <FontAwesomeIcon icon={faDesktop} className={`text-xl ${primaryColorClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Frontend</h3>
            </div>
            
            {/* Scrollable skills container */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-3">
                {skills.frontend.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group relative space-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`mr-3 w-5 h-5 transition-all duration-300 group-hover:scale-110 ${primaryColorClass}`}
                        />
                        <span className={`font-medium text-text-primary-light dark:text-text-primary-dark group-hover:${primaryColorClass} transition-colors`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                          {skill.level}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${primaryBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="h-80 bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 border border-border-light dark:border-border-dark hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${iconBgColorClass}`}>
                <FontAwesomeIcon icon={faServer} className={`text-xl ${primaryColorClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Backend</h3>
            </div>
            
            {/* Scrollable skills container */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-3">
                {skills.backend.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group relative space-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`mr-3 w-5 h-5 transition-all duration-300 group-hover:scale-110 ${primaryColorClass}`}
                        />
                        <span className={`font-medium text-text-primary-light dark:text-text-primary-dark group-hover:${primaryColorClass} transition-colors`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                          {skill.level}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${primaryBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Programming & Tools */}
          
          {/* Programming Languages */}
          <div className="h-80 bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 border border-border-light dark:border-border-dark hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${iconBgColorClass}`}>
                <FontAwesomeIcon icon={faCode} className={`text-xl ${primaryColorClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Programming</h3>
            </div>
            
            {/* Scrollable skills container */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-3">
                {skills.programming.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group relative space-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`mr-3 w-5 h-5 transition-all duration-300 group-hover:scale-110 ${primaryColorClass}`}
                        />
                        <span className={`font-medium text-text-primary-light dark:text-text-primary-dark group-hover:${primaryColorClass} transition-colors`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                          {skill.level}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${primaryBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="h-80 bg-card-light dark:bg-card-dark rounded-2xl shadow-lg p-6 border border-border-light dark:border-border-dark hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${iconBgColorClass}`}>
                <FontAwesomeIcon icon={faTools} className={`text-xl ${primaryColorClass}`} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Tools</h3>
            </div>
            
            {/* Scrollable skills container */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="space-y-3">
                {skills.tools.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group relative space-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className={`mr-3 w-5 h-5 transition-all duration-300 group-hover:scale-110 ${primaryColorClass}`}
                        />
                        <span className={`font-medium text-text-primary-light dark:text-text-primary-dark group-hover:${primaryColorClass} transition-colors`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-text-secondary-light dark:text-text-secondary-dark font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                          {skill.level}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${primaryBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Always learning new technologies and best practices. 
            <br></br>
            <span className={`font-medium ml-2 ${primaryColorClass}`}>
              Currently focusing on: Spring Boot and React.
            </span>
          </p>
        </div>

        {/* Skill Details Modal */}
        {isModalOpen && selectedSkill && (
          <div 
            className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={handleBackdropClick}
          >
            <div 
              className="bg-card-light dark:bg-card-dark rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
              style={{ 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border-light dark:border-border-dark relative">
                <button
                  onClick={closeSkillModal}
                  className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-gray-500 dark:text-gray-400" />
                </button>
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${iconBgColorClass}`}>
                    <FontAwesomeIcon 
                      icon={selectedSkill.icon} 
                      className="text-2xl"
                      style={{ color: primaryColor }} 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">{selectedSkill.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${selectedSkill.level}%`,
                            backgroundColor: secondaryColor
                          }}
                        ></div>
                      </div>
                      <span className="ml-3 font-semibold" style={{ color: primaryColor }}>
                        {selectedSkill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">{selectedSkill.description}</p>
                
                {/* Experience */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" style={{ color: primaryColor }} />
                    <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">Current Level</h4>
                  </div>
                  <div className={`px-3 py-2 rounded-lg ${iconBgColorClass}`}>
                    <span className="text-text-primary-light dark:text-text-primary-dark font-medium">{selectedSkill.experience}</span>
                  </div>
                </div>

                {/* Projects Used In */}
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" style={{ color: primaryColor }} />
                      <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">Projects & Usage</h4>
                    </div>
                    <div className="space-y-2">
                      {selectedSkill.projects.map((project, index) => (
                        <div 
                          key={index} 
                          className={`px-3 py-2 rounded-lg ${iconBgColorClass}`}
                        >
                          <span className="text-text-primary-light dark:text-text-primary-dark">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Tip */}
                {selectedSkill.tip && (
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" style={{ color: primaryColor }} />
                      <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">Learning Focus</h4>
                    </div>
                    <div className="px-4 py-3 rounded-lg border-l-4" style={{ 
                      borderLeftColor: primaryColor,
                      backgroundColor: isDarkMode ? '#111827' : '#F0F9F5'
                    }}>
                      <p className="text-text-primary-light dark:text-text-primary-dark">{selectedSkill.tip}</p>
                    </div>
                  </div>
                )}

                {/* Skill Level Indicator */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Beginner</span>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Intermediate</span>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Advanced</span>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Expert</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full relative mb-1">
                    <div 
                      className="h-full rounded-full absolute"
                      style={{ 
                        width: `${selectedSkill.level}%`,
                        backgroundColor: secondaryColor
                      }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 absolute top-1/2 transform -translate-y-1/2"
                      style={{ 
                        left: `${selectedSkill.level}%`,
                        backgroundColor: secondaryColor,
                        marginLeft: '-8px'
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;