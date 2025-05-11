import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import { projectsData } from "@/data/resume-data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter));
  
  const filterCategories = ["All", "Web", "AI", "Trading"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My" 
          highlight="Projects" 
          description="Here are some of my featured projects that showcase my skills and experience."
        />
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filterCategories.map((category, index) => (
            <motion.button 
              key={index}
              className={`filter-btn px-4 py-2 rounded-full ${
                activeFilter === category 
                  ? "bg-primary text-white" 
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              } transition-colors`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          
          {/* More Projects Button - only show if we have all projects */}
          {activeFilter === "All" && (
            <motion.div 
              className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href={`https://github.com/Rahul-gif-asus`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-primary border border-primary rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                See More Projects <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
