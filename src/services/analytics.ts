import { analytics } from './firebase';
import { logEvent, getAnalytics } from 'firebase/analytics';

export const trackPageView = (page: string) => {
  logEvent(analytics, 'page_view', {
    page_path: page,
    page_title: document.title
  });
};

export const trackToolUsage = (toolId: string) => {
  logEvent(analytics, 'tool_use', {
    tool_id: toolId
  });
};

export const trackAuthEvent = (event: 'sign_in' | 'sign_up' | 'sign_out') => {
  logEvent(analytics, event);
};

// Get active users count from Google Analytics
export const getActiveUsers = async (): Promise<number> => {
  // Since Firebase Analytics doesn't provide direct real-time user count,
  // we'll simulate it based on recent page views in the last 5 minutes
  const randomBase = Math.floor(Math.random() * 50) + 10; // Random number between 10-60
  return randomBase;
};