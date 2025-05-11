import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';

export function useResumeTracking() {
  const { trackEvent } = useAnalytics();
  
  const trackResumeDownload = useCallback(() => {
    // Track the resume download event
    trackEvent('resume_download', {
      timestamp: new Date().toISOString(),
      method: 'button_click'
    });
    
    // Trigger the actual download
    const resumeUrl = '/resume.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Rahul_Vishwakarma_Resume.pdf'); // The filename that will be suggested for download
    link.setAttribute('target', '_blank');
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    
    return true;
  }, [trackEvent]);
  
  return { trackResumeDownload };
} 