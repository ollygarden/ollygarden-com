
import posthog from 'posthog-js';

// A simple hook to provide access to PostHog functionality
export function usePostHog() {
  const captureEvent = (eventName: string, properties?: Record<string, any>) => {
    posthog.capture(eventName, properties);
  };

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    posthog.identify(userId, properties);
  };

  return {
    captureEvent,
    identifyUser,
    posthog,
  };
}
