import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { bioData, contactInfo } from "@/data/resume-data";
import { scrollToSection } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About" 
          highlight="Me" 
        />
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-5/12 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Developer Workspace" 
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-7/12 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              {bioData.longBio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-2"></i> Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-envelope text-primary mr-2"></i> Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400 truncate">{contactInfo.email}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-phone text-primary mr-2"></i> Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-graduation-cap text-primary mr-2"></i> Degree
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{contactInfo.degree}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-primary border border-primary rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(58, 134, 255, 0.3)" }}
              >
                My Projects
              </motion.a>
              <motion.a 
                href="#resume" 
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("resume");
                }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(58, 134, 255, 0.3)" }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
