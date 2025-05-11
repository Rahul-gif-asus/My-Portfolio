import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import Navbar from "@/components/navbar";
import HeroSection from "@/sections/hero-section";
import AboutSection from "@/sections/about-section";
import SkillsSection from "@/sections/skills-section";
import ProjectsSection from "@/sections/projects-section";
import ExperienceSection from "@/sections/experience-section";
import EducationSection from "@/sections/education-section";
import InvolvementSection from "@/sections/involvement-section";
import ContactSection from "@/sections/contact-section";
import ResumeSection from "@/sections/resume-section";
import FooterSection from "@/sections/footer-section";
import ProjectDetail from "@/pages/project-detail";
import NotFound from "@/pages/not-found";
import ContactedPage from "@/pages/contacted";
import { useAnalytics } from "./hooks/useAnalytics";
import SEO from "@/components/SEO";
import { bioData } from "@/data/resume-data";

// HomePage component that contains all sections
const HomePage = () => (
  <>
    <SEO />
    <div className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <InvolvementSection />
      <ContactSection />
      <ResumeSection />
      <FooterSection />
    </div>
  </>
);

function App() {
  const [location] = useLocation();
  const { trackPageView } = useAnalytics();
  
  // Check for saved theme preference or use system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Track page views whenever location changes
  useEffect(() => {
    // Get page title based on the route
    let pageTitle = 'Portfolio Home';
    if (location.startsWith('/project/')) {
      pageTitle = `Project: ${location.split('/').pop()}`;
    } else if (location === '/contacted') {
      pageTitle = 'Contact Submissions';
    } else if (location !== '/') {
      pageTitle = '404 Not Found';
    }
    
    trackPageView(location, pageTitle);
  }, [location, trackPageView]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/contacted" component={ContactedPage} />
          <Route path="/project/:title">
            {(params) => (
              <>
                <SEO 
                  title={`${params.title} | Project by ${bioData.name}`}
                  description={`View details about my project: ${params.title}. See technologies used, challenges, and outcomes.`}
                  article={true}
                />
                <ProjectDetail />
              </>
            )}
          </Route>
          <Route>
            <SEO 
              title="404 - Page Not Found | Rahul Vishwakarma"
              description="The page you are looking for doesn't exist or has been moved."
            />
            <NotFound />
          </Route>
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
