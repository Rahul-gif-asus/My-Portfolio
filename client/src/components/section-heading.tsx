import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeading({ title, highlight, description }: SectionHeadingProps) {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
