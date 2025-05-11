import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';

export function useProjectTracking() {
  const { trackProjectView, trackEvent } = useAnalytics();
  
  const trackProjectClick = useCallback((projectId: string, projectName: string) => {
    trackProjectView(projectId, projectName);
  }, [trackProjectView]);
  
  const trackProjectAction = useCallback((projectId: string, projectName: string, action: string) => {
    trackEvent('project_action', {
      project_id: projectId,
      project_name: projectName,
      action_type: action
    });
  }, [trackEvent]);
  
  return {
    trackProjectClick,
    trackProjectAction
  };
} 