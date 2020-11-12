import { useEffect } from 'react';

import type { Element, Options } from './types';

export const useListener = (
  eventName: string | string[],
  onSignal: (e: CustomEvent) => void,
  element: Element = window,
  options: Options = {}
) => {
  useEffect(() => {
    const handleSignal = (e: Event) => {
      onSignal(e as CustomEvent);
    };

    const x = (eventName: string) => {
      element.addEventListener(eventName, handleSignal, options);

      return () =>
        element.removeEventListener(eventName, handleSignal, options);
    };

    if (typeof eventName === 'string') {
      x(eventName);
    } else {
      eventName.map((z) => x(z));
    }
  }, [element, eventName, onSignal, options]);
};
