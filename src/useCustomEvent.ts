import { useEffect } from 'react';

interface Params {
  readonly eventName: string;
  onSignal?: (e: CustomEvent) => void;
}

export const useCustomEvent = ({ eventName, onSignal }: Params) => {
  useEffect(() => {
    const handleSignal = (e: Event) => {
      if (onSignal) onSignal(e as CustomEvent);
    };

    window.addEventListener(eventName, handleSignal);

    return () => window.removeEventListener(eventName, handleSignal);
  }, []);

  const callEvent = <T>(data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    window.dispatchEvent(event);
  };

  return callEvent;
};
