import { useEffect, useState } from 'react';
import { analytics, initAnalytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize analytics on component mount
  useEffect(() => {
    const init = async () => {
      const analyticsInstance = await initAnalytics();
      setIsInitialized(!!analyticsInstance);
    };

    init();
  }, []);

  // Track page views
  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (!analytics) return;
    
    logEvent(analytics, 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href
    });
  };

  // Track custom events
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (!analytics) return;
    
    logEvent(analytics, eventName, eventParams);
  };

  // Track section views
  const trackSectionView = (sectionName: string) => {
    if (!analytics) return;
    
    logEvent(analytics, 'section_view', {
      section_name: sectionName
    });
  };

  // Track external link clicks
  const trackExternalLink = (url: string, linkText?: string) => {
    if (!analytics) return;
    
    logEvent(analytics, 'external_link_click', {
      link_url: url,
      link_text: linkText || url
    });
  };

  // Track project views
  const trackProjectView = (projectId: string, projectName: string) => {
    if (!analytics) return;
    
    logEvent(analytics, 'project_view', {
      project_id: projectId,
      project_name: projectName
    });
  };

  // Track form submissions
  const trackFormSubmit = (formName: string) => {
    if (!analytics) return;
    
    logEvent(analytics, 'form_submit', {
      form_name: formName
    });
  };

  return {
    isInitialized,
    trackPageView,
    trackEvent,
    trackSectionView,
    trackExternalLink,
    trackProjectView,
    trackFormSubmit
  };
}; 