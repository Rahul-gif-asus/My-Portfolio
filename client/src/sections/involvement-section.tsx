import SectionHeading from "@/components/section-heading";
import InvolvementCard from "@/components/involvement-card";
import { involvementData } from "@/data/resume-data";

export default function InvolvementSection() {
  return (
    <section id="involvement" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Achievements &" 
          highlight="Involvement" 
          description="My activities and achievements beyond professional work."
        />
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementData.map((involvement, index) => (
            <InvolvementCard 
              key={index}
              title={involvement.title}
              organization={involvement.organization}
              period={involvement.period}
              description={involvement.description}
              icon={involvement.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
