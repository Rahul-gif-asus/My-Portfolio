import { motion } from "framer-motion";

interface InvolvementCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: string;
  index: number;
}

export default function InvolvementCard({
  title,
  organization,
  period,
  description,
  icon,
  index
}: InvolvementCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-primary text-4xl mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary mb-2">{organization}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{period}</p>
      <p className="text-gray-600 dark:text-gray-400 mt-4">
        {description}
      </p>
    </motion.div>
  );
}
