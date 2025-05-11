import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden bg-white dark:bg-darkBgAlt border-t border-gray-200 dark:border-gray-800 fixed w-full z-40"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#about" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("about");
              }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("skills");
              }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("projects");
              }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("experience");
              }}
            >
              Experience
            </a>
            <a 
              href="#education" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("education");
              }}
            >
              Education
            </a>
            <a 
              href="#contact" 
              className="py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("contact");
              }}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
