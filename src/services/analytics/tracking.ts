import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

export const trackPageView = (pagePath: string) => {
  logEvent(analytics, 'page_view', {
    page_path: pagePath,
    page_title: document.title
  });
};

export const trackUserAction = (action: string, data?: Record<string, any>) => {
  logEvent(analytics, action, data);
};

export const initializeAnalytics = () => {
  // Enable analytics debug mode in development
  if (import.meta.env.DEV) {
    window.localStorage.setItem('debug', 'firebase:analytics');
  }
};