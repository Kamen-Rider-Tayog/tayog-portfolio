import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      if (scrolled > 300) {
        setIsVisible(true);
        
        // Check if button is over footer
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const buttonBottom = window.innerHeight - 100;
          
          setIsOverFooter(buttonBottom > footerRect.top);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SMOOTH SCROLL FUNCTION
  const scrollToTop = () => {
    // Get current scroll position
    const currentPosition = window.pageYOffset;
    
    // Calculate animation duration based on scroll distance (faster for short scrolls, slower for long)
    const duration = Math.min(1000, currentPosition * 1.2); // Max 1 second
    
    // Start time
    const startTime = performance.now();
    
    // Create easing function (easeOutCubic)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    // Animation function
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing
      const easeProgress = easeOutCubic(progress);
      
      // Calculate new position
      const newPosition = currentPosition * (1 - easeProgress);
      
      // Scroll to new position
      window.scrollTo(0, newPosition);
      
      // Continue animation if not finished
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    // Start animation
    requestAnimationFrame(animateScroll);
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.15,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const iconVariants = {
    bounce: {
      y: [0, -4, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    },
    hover: {
      y: -6,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          onClick={scrollToTop}
          className={`group fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-50 ${
            isOverFooter 
              ? 'bg-gradient-to-br from-[#F0EEE9] to-gray-100 dark:from-[#4ECDC4] dark:to-[#3ab4ac] text-[#169C78] dark:text-gray-900 border-2 border-[#169C78]/40 dark:border-[#4ECDC4]/60' 
              : 'bg-gradient-to-br from-[#169C78] to-[#128a6a] dark:from-[#4ECDC4] dark:to-[#3ab4ac] text-white dark:text-gray-900 hover:from-[#F7CAC9] hover:to-[#f5b8b6] dark:hover:from-[#3ab4ac] dark:hover:to-[#2a9c96]'
          }`}
          aria-label="Back to top"
        >
          {/* Progress ring background */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="opacity-20"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={100}
              strokeDashoffset={100 - scrollProgress}
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - scrollProgress }}
              transition={{ duration: 0.3 }}
            />
          </svg>
          
          {/* Icon with animation */}
          <motion.div
            variants={iconVariants}
            animate="bounce"
            whileHover="hover"
            className="relative z-10"
          >
            <FontAwesomeIcon 
              icon={faCaretUp} 
              className="text-base group-hover:text-[#169C78] dark:group-hover:text-gray-900 transition-colors" 
            />
          </motion.div>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 text-xs font-medium py-2 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            <span className="flex items-center">
              <span className="mr-1">↑</span>
              Back to top
              <span className="ml-1">↑</span>
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
          </motion.div>
          
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(22, 156, 120, 0.4)",
                "0 0 0 10px rgba(22, 156, 120, 0)",
                "0 0 0 0 rgba(22, 156, 120, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;