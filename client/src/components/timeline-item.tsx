import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  index: number;
}

export default function TimelineItem({
  title,
  company,
  location,
  period,
  description,
  index
}: TimelineItemProps) {
  return (
    <motion.div 
      className={`mb-10 relative timeline-dot ${index === 0 ? "" : "mt-10"}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary font-medium">{company}{location ? ` | ${location}` : ""}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full">
              {period}
            </span>
          </div>
        </div>
        
        <div className="text-gray-600 dark:text-gray-400">
          <ul className="list-disc ml-5 space-y-2">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
