import SectionHeading from "@/components/section-heading";
import EducationCard from "@/components/education-card";
import CertificationCard from "@/components/certification-card";
import { educationData, certificationData } from "@/data/resume-data";

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education &" 
          highlight="Certifications" 
          description="My academic background and professional certifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                <i className="fas fa-graduation-cap"></i>
              </span>
              Education
            </h3>
            
            <div className="space-y-6">
              {educationData.map((education, index) => (
                <EducationCard 
                  key={index}
                  title={education.title}
                  institution={education.institution}
                  location={education.location}
                  year={education.year}
                  grade={education.grade}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                <i className="fas fa-certificate"></i>
              </span>
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certificationData.map((certification, index) => (
                <CertificationCard 
                  key={index}
                  title={certification.title}
                  issuer={certification.issuer}
                  year={certification.year}
                  description={certification.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
