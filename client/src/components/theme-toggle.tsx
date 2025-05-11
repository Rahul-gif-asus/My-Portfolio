import { toggleTheme } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    // Listen for theme changes that might happen elsewhere
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="p-2 rounded-full bg-transparent text-gray-800 dark:text-gray-200 transition-colors relative"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="relative w-5 h-5 flex items-center justify-center"
        initial={false}
      >
        <motion.i
          className="fas fa-sun absolute text-yellow-500"
          initial={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 45 }}
          animate={{ 
            opacity: isDark ? 1 : 0, 
            rotate: isDark ? 0 : 90,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.i
          className="fas fa-moon absolute text-blue-400"
          initial={{ opacity: isDark ? 0 : 1, rotate: isDark ? -45 : 0 }}
          animate={{ 
            opacity: isDark ? 0 : 1, 
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0.5 : 1, 
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Ripple effect */}
      <motion.span
        className={`absolute inset-0 rounded-full ${isDark ? 'bg-yellow-500' : 'bg-blue-400'} opacity-0`}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 0], opacity: [0, 0.15, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
      />
    </motion.button>
  );
}
