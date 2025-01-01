import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { AnalyticsEvent, AnalyticsParams } from './types';

export const trackEvent = <T extends AnalyticsEvent>(
  event: T,
  params?: AnalyticsParams[T]
) => {
  logEvent(analytics, event, params);
};