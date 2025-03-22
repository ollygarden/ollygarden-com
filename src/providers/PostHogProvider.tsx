
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const location = useLocation();

  useEffect(() => {
    // Initialize PostHog with your project API key
    // Using the public key which is safe to expose in client-side code
    posthog.init('phc_YOUR_PROJECT_API_KEY', {
      api_host: 'https://app.posthog.com',
      // Disable in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.opt_out_capturing();
        }
      },
    });
  }, []);

  // Track page views
  useEffect(() => {
    // Track page views when the route changes
    posthog.capture('$pageview');
  }, [location]);

  return <>{children}</>;
}
