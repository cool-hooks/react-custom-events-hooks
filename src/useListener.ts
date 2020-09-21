import { useEffect } from 'react';

export const useListener = (
  eventName: string,
  onSignal: (e: CustomEvent) => void,
  element: any = window, // TODO
  options: any = {} // TODO
) => {
  useEffect(() => {
    const handleSignal = (e: Event) => {
      if (onSignal) onSignal(e as CustomEvent);
    };

    element.addEventListener(eventName, handleSignal, options);

    return () => element.removeEventListener(eventName, handleSignal, options); // TODO options
  }, []);
};
