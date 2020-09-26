import { useEffect } from 'react';

import type { Element, Options } from './types';

export const useListener = (
  eventName: string,
  onSignal: (e: CustomEvent) => void,
  element: Element = window,
  options: Options = {}
) => {
  useEffect(() => {
    const handleSignal = (e: Event) => {
      onSignal(e as CustomEvent);
    };

    element.addEventListener(eventName, handleSignal, options);

    return () => element.removeEventListener(eventName, handleSignal, options);
  }, [element, eventName, onSignal, options]);
};
