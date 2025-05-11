import { contactInfo, bioData } from "@/data/resume-data";
import { scrollToSection } from "@/lib/utils";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-2xl font-bold tracking-tight flex items-center space-x-1"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              <span className="text-primary">&lt;</span>
              <span className="dark:text-white">Rahul</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {bioData.title}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} {bioData.name}. All rights reserved.</p>
          <p className="mt-2">
            Built with <i className="fas fa-heart text-primary"></i> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
