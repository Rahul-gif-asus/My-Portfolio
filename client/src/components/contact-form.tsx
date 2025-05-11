import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { saveContactForm, ContactFormData } from "@/lib/firebase";

const SUBJECT_OPTIONS = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Technical Consulting",
  "Other"
];

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCustomSubject, setShowCustomSubject] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "Other") {
      setShowCustomSubject(true);
      setFormData(prev => ({ ...prev, subject: "" }));
    } else {
      setShowCustomSubject(false);
      setFormData(prev => ({ ...prev, subject: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Save to Firebase
      await saveContactForm(formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setShowCustomSubject(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6">Send Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</Label>
        <select
          id="subject" 
          name="subject" 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          value={showCustomSubject ? "Other" : formData.subject}
          onChange={handleSubjectChange}
        >
          <option value="" disabled>Select a subject</option>
          {SUBJECT_OPTIONS.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {showCustomSubject && (
          <Input
            type="text"
            id="custom-subject"
            name="subject"
            placeholder="Enter your subject"
            className="w-full mt-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          value={formData.subject}
          onChange={handleChange}
        />
        )}
      </div>
      
      <div className="mb-6">
        <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="Your Message" 
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Processing <i className="fas fa-spinner fa-spin ml-2"></i></>
        ) : (
          <>Send Message <i className="fas fa-paper-plane ml-2"></i></>
        )}
      </Button>
    </motion.form>
  );
}
