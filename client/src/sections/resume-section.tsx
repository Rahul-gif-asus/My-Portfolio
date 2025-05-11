import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { bioData } from "@/data/resume-data";
import { useResumeTracking } from "@/hooks/useResumeTracking";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

export default function ResumeSection() {
  const { trackResumeDownload } = useResumeTracking();

  return (
    <AnalyticsTracker sectionName="resume_section">
      <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title="Download" 
            highlight="Resume" 
            description="Get a copy of my detailed resume"
          />
          
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              className="relative bg-gradient-to-br from-gray-800 to-gray-950 dark:from-gray-700 dark:to-gray-900 p-10 rounded-xl shadow-2xl max-w-md mb-10 overflow-hidden border border-gray-700/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                scale: 1.02,
              }}
            >
              {/* Background decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />
              
              <div className="relative flex flex-col items-center justify-center space-y-8">
                <motion.button 
                  onClick={trackResumeDownload}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 text-xl font-medium text-white shadow-xl transition-all hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative flex items-center justify-center w-full rounded-md bg-blue-500 px-8 py-4 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                    Download Resume
                  </span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Last updated: April 2025
            </motion.div>
          </div>
        </div>
      </section>
    </AnalyticsTracker>
  );
}
