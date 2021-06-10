import { useCallback } from 'react';

import type { Element } from '../types';

type CallEventCallback<T> = (data: T) => void;

export const useEmitter = <T>(eventName: string, element: Element = window) => {
  const callEvent = useCallback<CallEventCallback<T>>(
    (data) => {
      const event = new CustomEvent(eventName, { detail: data });

      element.dispatchEvent(event);
    },
    [element, eventName]
  );

  return callEvent;
};
