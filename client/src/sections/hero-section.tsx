import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBackground from "@/components/particles-background";
import TypingAnimation from "@/components/typing-animation";
import { scrollToSection } from "@/lib/utils";
import { bioData, contactInfo } from "@/data/resume-data";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimationControls();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Sequence animation
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };
    
    sequence();
  }, [controls]);

  // Creating animated text variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1 + 0.1
      }
    })
  };
  
  // Creating animated social icons variants
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2 + i * 0.1
      }
    })
  };
  
  // Creating button hover animations
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-7/12 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span 
                className="text-primary font-mono text-lg inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                &lt;Hello World! /&gt;
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              I'm <motion.span 
                className="gradient-text"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {bioData.name}
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-medium mb-6"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <TypingAnimation 
                text={bioData.title} 
                highlightWords={["Full Stack", "Developer", "React", "Node.js"]} 
                colorGradient={true}
              />
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mb-8"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {bioData.summary}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.a 
                href="#contact" 
                className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg overflow-hidden relative group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary animate-shine opacity-0 group-hover:opacity-30 rounded-lg transition-opacity"
                />
                <span className="relative z-10">Get In Touch</span>
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-all shadow-md relative overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shine opacity-0 group-hover:opacity-30 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                <span className="relative z-10">See My Work</span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                className="relative group"
                custom={0}
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl relative block p-2"
                  whileHover={{ y: -5, color: "#0A66C2", scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <i className="fab fa-linkedin relative z-10"></i>
                </motion.a>
                <motion.span 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  LinkedIn
                </motion.span>
              </motion.div>
              
              <motion.div
                className="relative group"
                custom={1}
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl relative block p-2"
                  whileHover={{ y: -5, color: "#171515", scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <i className="fab fa-github relative z-10"></i>
                </motion.a>
                <motion.span 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  GitHub
                </motion.span>
              </motion.div>
              
              <motion.div
                className="relative group"
                custom={2}
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-2xl relative block p-2"
                  whileHover={{ y: -5, color: "#EA4335", scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/30 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <i className="fas fa-envelope relative z-10"></i>
                </motion.a>
                <motion.span 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  Email
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-5/12 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              scale: isVisible ? 1 : 0.8,
              rotate: 0 
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary to-pink-600 rounded-full opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              ></motion.div>
              <motion.div 
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl"
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src={bioData.profileImage || "/images/profile.jpeg"}
                  alt="Rahul Vishwakarma" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.2 }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
