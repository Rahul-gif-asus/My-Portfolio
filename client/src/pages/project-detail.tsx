import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { projectsData } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function ProjectDetail() {
  const [matched, params] = useRoute("/project/:title");
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (matched && params?.title) {
      // Decode the URL-encoded project title
      const title = String(params.title);
      const decodedTitle = decodeURIComponent(title);
      
      // Find the project by title
      const foundProject = projectsData.find(
        (p) => p.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      
      if (foundProject) {
        setProject(foundProject);
      }
      
      setLoading(false);
    }
  }, [matched, params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-primary">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the project you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/">
          <a className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Back to Home
          </a>
        </Link>
      </div>
    );
  }

  // For SpaceX Launch Explorer project, add detailed description
  const getDetailedDescription = () => {
    switch(project.title) {
      case "SpaceX Launch Explorer":
        return (
          <>
            <p className="mb-6">
              I developed a comprehensive SpaceX Launch Explorer web application using React.js, which provides users with detailed information on past and upcoming SpaceX rocket launches. This project features a responsive and user-friendly interface built with Mantine UI, ensuring a seamless experience across all devices.
            </p>
            <h3 className="text-xl font-bold mb-3">Key Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Implemented state management with Zustand for efficient data handling and scalability.</li>
              <li>Integrated image preview functionality, a scroll-to-top animation, and a dynamic back button for enhanced user interaction.</li>
              <li>Optimized the page layout and design by incorporating modern UI trends inspired by space-themed websites.</li>
              <li>Enhanced performance by optimizing API calls and improving the responsiveness of key components like the SpaceXResourcesList.</li>
              <li>Deployed the application on Vercel, ensuring fast load times and seamless hosting.</li>
              <li>Focused on maintainability and scalability with a clean, modular component structure and best practices in folder organization.</li>
            </ul>
          </>
        );
      case "CrowdSource Platform":
        return (
          <>
            <p className="mb-6">
              The CrowdSource Platform is a dynamic web application designed to foster collaborative problem-solving by allowing users to post challenges, propose solutions, and engage in meaningful discussions. Built on the robust MERN stack, this platform integrates state-of-the-art features to enhance user experience and drive community-driven solutions.
            </p>
            <h3 className="text-xl font-bold mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Collaborative Problem-Solving: Users can post problems and contribute solutions, creating a community-driven approach to innovation.</li>
              <li>Real-Time Updates: The platform ensures instant updates, providing a seamless experience without page reloads.</li>
              <li>User Authentication & Profile Management: Secure login, registration, and personalized profile management to boost user engagement.</li>
              <li>Tech Stack: Frontend with React, Redux, and Material-UI; Backend with Node.js and Express; Database with MongoDB; Authentication with JWT.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Engineered a secure, scalable platform for real-time collaborative problem-solving.</li>
              <li>Implemented advanced state management using Redux, enabling efficient handling of complex user interactions.</li>
              <li>Created an intuitive and responsive user interface with Material-UI for a professional look and feel.</li>
              <li>The CrowdSource Platform embodies my passion for leveraging technology to bring people together, encouraging collective intelligence to solve challenges effectively.</li>
            </ul>
          </>
        );
      case "Dividend ROI Calculator":
        return (
          <>
            <p className="mb-6">
              The Dividend ROI Calculator is a robust tool designed to empower investors by providing detailed insights into potential dividend earnings from stocks listed on the National Stock Exchange (NSE) of India. This Python-based application automates the process of fetching real-time data and calculating returns, helping investors make informed decisions.
            </p>
            <h3 className="text-xl font-bold mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Real-Time Data Fetching: Integrates with Angel One API to retrieve current stock prices and dividend data.</li>
              <li>Comprehensive Analysis: Automatically calculates potential dividend earnings and identifies active vs. inactive dividend opportunities.</li>
              <li>User-Centric Reporting: Generates clear and actionable reports on dividend potential, including missed opportunities.</li>
              <li>Tech Stack: Python, MongoDB for database, pymongo for database connections, requests for API calls, BeautifulSoup for web scraping, and tabulate for report formatting.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Developed an intuitive tool that simplifies dividend tracking and potential earnings calculation.</li>
              <li>Leveraged Python and MongoDB to create a scalable and efficient solution for real-time financial analysis.</li>
              <li>Focused on delivering a seamless user experience through automated data processing and detailed reporting.</li>
            </ul>
          </>
        );
      case "Vega - Copy Trading Platform":
        return (
          <>
            <p className="mb-6">
              Vega is a powerful copy trading platform designed to revolutionize stock trading by enabling users to replicate trades from top-performing strategies. This platform combines advanced data analysis with intuitive design, making it accessible to both novice and experienced traders.
            </p>
            <h3 className="text-xl font-bold mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Automated Trade Replication: Users can seamlessly copy successful trading strategies.</li>
              <li>Data-Driven Insights: Real-time performance analysis and visualization tools.</li>
              <li>Secure Data Management: Multiple storage options, including MongoDB and JSON, with a self-destruct mode for enhanced security.</li>
              <li>Tech Stack: Python for backend logic, MongoDB for database management, RESTful APIs for communication, Web Scraping for market data, Statistical Analysis for performance metrics.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Implemented real-time data analysis for trade performance evaluation.</li>
              <li>Developed a secure and flexible system for storing and visualizing trading data.</li>
              <li>Created a user-centric platform that simplifies complex trading activities.</li>
              <li>Vega represents my dedication to building innovative financial tools that empower users to navigate the complexities of the stock market with confidence.</li>
            </ul>
          </>
        );
      case "Smart Translator":
        return (
          <>
            <p className="mb-6">
              Smart Translator is a cutting-edge language translation tool that delivers real-time, high-precision translations across multiple languages. By integrating powerful APIs and ensuring a seamless user experience, this project is designed to be an indispensable tool for global communication.
            </p>
            <h3 className="text-xl font-bold mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Instant Translation: Delivers real-time, high-precision translations across multiple languages, enabling smooth cross-cultural communication.</li>
              <li>Seamless API Integration: Harnesses the power of the Google Translate API to provide reliable and contextually accurate translations.</li>
              <li>Responsive & Intuitive Design: Crafted a fully responsive interface, ensuring an optimized user experience on both desktop and mobile devices.</li>
              <li>User-Centric Interface: Focused on creating a clean, minimalistic design that emphasizes usability and accessibility.</li>
              <li>Tech Stack: HTML/CSS for frontend structure and styling, JavaScript for client-side functionality, Node.js for server operations, MongoDB for data storage, REST APIs for service communication, React.js for UI components, Git for version control.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Highlights:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Mastered the complexities of API integration, ensuring translations are not only quick but also contextually accurate.</li>
              <li>Developed a highly responsive UI, providing users with a seamless and consistent experience across all devices.</li>
              <li>This project allowed me to push the boundaries of what's possible with web development, merging functionality with user-focused design.</li>
              <li>Smart Translator demonstrates my passion for creating technology that bridges communication gaps and brings the world closer together.</li>
            </ul>
          </>
        );
      default:
        return <p>{project.description}</p>;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Simple navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold tracking-tight flex items-center space-x-1">
              <span className="text-primary">&lt;</span>
              <span className="dark:text-white">Rahul</span>
              <span className="text-primary">/&gt;</span>
            </a>
          </Link>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <Link href="/">
              <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
                <i className="fas fa-arrow-left mr-2"></i> Back to Portfolio
              </a>
            </Link>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-border-glow"
        >
          {/* Project Header */}
          <motion.div 
            className="h-64 md:h-80 overflow-hidden relative"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="p-6 md:p-8 text-white">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {project.title}
                </motion.h1>
                <motion.div 
                  className="flex items-center mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <span className="text-gray-300">{project.period}</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Content */}
          <motion.div 
            className="p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Technologies Used */}
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1.5 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-md"
                    >
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h2 className="text-xl font-bold mb-4">Project Description</h2>
              <div className="text-gray-700 dark:text-gray-300">
                {getDetailedDescription()}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fas fa-arrow-left mr-2"></i> Back to Portfolio
                  </Button>
                </Link>
              </motion.div>
              
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className="fab fa-github mr-2"></i> View on GitHub
                </motion.a>
              )}
              
              {project.link && (
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg flex items-center shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 112, 243, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}