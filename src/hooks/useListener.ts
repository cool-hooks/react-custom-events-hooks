import { useEffect } from 'react';

import type { Element, Options } from '../types';

export const useListener = <T>(
  eventName: string,
  onSignal: (e: CustomEvent<T>) => void,
  element: Element = window,
  options: Options = {}
) => {
  useEffect(() => {
    if (typeof onSignal === 'function') {
      const handleSignal = (e: Event) => {
        onSignal(e as CustomEvent);
      };

      element.addEventListener(eventName, handleSignal, options);

      return () =>
        element.removeEventListener(eventName, handleSignal, options);
    }
  }, [element, eventName, onSignal, options]);
};
