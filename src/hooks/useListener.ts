import { useEffect } from 'react';

import { Params } from '../types';

export const useListener = <T>({
  eventName,
  onSignal,
  element = window,
  options = {},
}: Params<T>) => {
  // TODO callback (returned from hook?)
  useEffect(() => {
    if (typeof onSignal === 'function') {
      const handleSignal = (e: Event) => onSignal(e as CustomEvent);

      element.addEventListener(eventName, handleSignal, options);

      return () =>
        element.removeEventListener(eventName, handleSignal, options);
    }
  }, [element, eventName, onSignal, options]);
};
