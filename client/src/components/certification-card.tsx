import { motion } from "framer-motion";

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  index: number;
}

export default function CertificationCard({
  title,
  issuer,
  year,
  description,
  index
}: CertificationCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-primary">{issuer}</p>
      <p className="text-gray-600 dark:text-gray-400">{year}</p>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
          {description}
        </p>
      )}
    </motion.div>
  );
}
