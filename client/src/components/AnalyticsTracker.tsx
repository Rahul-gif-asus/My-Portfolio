import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsTrackerProps {
  sectionName: string;
  children: React.ReactNode;
}

export function AnalyticsTracker({ sectionName, children }: AnalyticsTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasTracked, setHasTracked] = useState(false);
  const { trackSectionView } = useAnalytics();
  
  useEffect(() => {
    if (!ref.current || hasTracked) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTracked) {
          // Track when section becomes visible
          trackSectionView(sectionName);
          setHasTracked(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Track when 30% of the section is visible
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [sectionName, trackSectionView, hasTracked]);
  
  return <div ref={ref}>{children}</div>;
} 