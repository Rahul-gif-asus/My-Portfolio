import { motion } from "framer-motion";

interface Skill {
  name: string;
}

interface SkillCardProps {
  title: string;
  icon: string;
  skills: Skill[];
  delay?: number;
}

export default function SkillCard({ title, icon, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="text-primary text-3xl mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="skill-tag px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full text-sm transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 + delay * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(58, 134, 255, 0.3)" }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
