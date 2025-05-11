import { motion } from "framer-motion";
import { Link } from "wouter";

interface Technology {
  name: string;
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
    link?: string;
    github?: string;
    period: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Create URL-friendly slug for project title
  const projectSlug = encodeURIComponent(project.title);
  
  return (
    <motion.div 
      className="project-card group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="relative overflow-hidden h-48 group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
          <motion.div 
            className="text-white text-center px-4 space-y-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1,
              type: "spring",
              stiffness: 200
            }}
          >
            <button 
              onClick={() => window.location.href = `/project/${projectSlug}`}
              className="inline-block px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-colors hover:scale-105 transform hover:shadow-lg"
            >
              View Details <i className="fas fa-info-circle ml-1"></i>
            </button>
            
            {(project.link || project.github) && (
              <a 
                href={project.link || project.github || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-colors hover:scale-105 transform hover:shadow-lg"
              >
                View Project <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            )}
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <span 
            onClick={() => window.location.href = `/project/${projectSlug}`}
            className="cursor-pointer hover:text-primary transition-colors"
          >
            {project.title}
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm my-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.period}</span>
          <div className="flex space-x-3">
            <button 
              onClick={() => window.location.href = `/project/${projectSlug}`}
              className="text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              <i className="fas fa-info-circle text-lg"></i>
            </button>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <i className="fas fa-external-link-alt text-lg"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
