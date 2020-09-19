import { useEffect } from 'react';

export const useListener = (
  eventName: string,
  onSignal: (e: CustomEvent) => void
) => {
  useEffect(() => {
    const handleSignal = (e: Event) => {
      if (onSignal) onSignal(e as CustomEvent);
    };

    window.addEventListener(eventName, handleSignal);

    return () => window.removeEventListener(eventName, handleSignal);
  }, []);
};
