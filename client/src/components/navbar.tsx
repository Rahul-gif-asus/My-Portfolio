import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 transition-all duration-300 ${
          isScrolled 
            ? "py-2 shadow-lg border-b border-gray-200/50 dark:border-indigo-500/10" 
            : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5 
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-2xl font-bold tracking-tight flex items-center space-x-1 relative group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="text-primary font-mono transition-colors animate-pulse-slow"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                textShadow: ["0 0 5px rgba(0,112,243,0.3)", "0 0 15px rgba(0,112,243,0.7)", "0 0 5px rgba(0,112,243,0.3)"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >&lt;</motion.span>
            <motion.span className="dark:text-white bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary font-mono animate-background-pan">Rahul</motion.span>
            <motion.span 
              className="text-primary font-mono transition-colors animate-pulse-slow"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                textShadow: ["0 0 5px rgba(0,112,243,0.3)", "0 0 15px rgba(0,112,243,0.7)", "0 0 5px rgba(0,112,243,0.3)"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >/&gt;</motion.span>
            
            {/* Hover effect */}
            <motion.span 
              className="absolute inset-0 rounded-md -z-10 opacity-0 group-hover:opacity-100 group-hover:bg-primary/5 dark:group-hover:bg-primary/10" 
              layoutId="hoverEffect"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.a 
                  href={`#${item.id}`} 
                  className="px-2 py-1 text-gray-600 dark:text-gray-300 transition-colors relative z-10 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  {item.label}
                  
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    layoutId={`underline-${item.id}`}
                    initial={{ opacity: 0, width: "0%" }}
                    whileHover={{ 
                      opacity: 1, 
                      width: "100%",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.a>
                
                {/* Background highlight */}
                <motion.span 
                  className="absolute inset-0 rounded-md -z-0 opacity-0 group-hover:opacity-100 bg-primary/5 dark:bg-primary/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-full p-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <ThemeToggle />
            </div>
            
            <motion.button
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all relative"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/5 dark:bg-primary/10 opacity-0"
                animate={{ 
                  scale: isMobileMenuOpen ? [0.8, 1.2, 1] : 1,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ type: "spring" }}
              />
              <motion.i 
                className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onNavClick={handleNavClick} />
    </>
  );
}
