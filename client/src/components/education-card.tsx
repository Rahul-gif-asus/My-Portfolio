import { motion } from "framer-motion";

interface EducationCardProps {
  title: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  index: number;
}

export default function EducationCard({
  title,
  institution,
  location,
  year,
  grade,
  index
}: EducationCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-primary">{institution}</p>
      <p className="text-gray-600 dark:text-gray-400">{location} | {year}</p>
      <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full text-sm">
        {grade}
      </div>
    </motion.div>
  );
}
