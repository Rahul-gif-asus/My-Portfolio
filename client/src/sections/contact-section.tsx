import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { contactInfo } from "@/data/resume-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In" 
          highlight="Touch" 
          description="Interested in working together? Let's connect! Feel free to reach out through the form or directly via email."
        />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          {/* Contact Information */}
          <motion.div 
            className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xl mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary text-xl mr-4">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">LinkedIn</h4>
                    <a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {contactInfo.linkedin.split('//')[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <div className="w-full md:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
