import SectionHeading from "@/components/section-heading";
import SkillCard from "@/components/skill-card";
import { skillsData } from "@/data/resume-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My" 
          highlight="Skills" 
          description="I've worked with a range of technologies in the web development world, from front-end to back-end."
        />
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
