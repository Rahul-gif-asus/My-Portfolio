import SectionHeading from "@/components/section-heading";
import TimelineItem from "@/components/timeline-item";
import { experienceData } from "@/data/resume-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work" 
          highlight="Experience" 
          description="My professional journey and industry experience."
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative pl-8 md:pl-12">
            {/* Timeline line */}
            <div className="timeline-line"></div>
            
            {experienceData.map((experience, index) => (
              <TimelineItem 
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
