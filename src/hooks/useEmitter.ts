import { useCallback } from 'react';

import type { ObservedElement } from '../types';

type CallEventCallback<T> = (data: T) => void;

export const useEmitter = <T>(
  eventName: string,
  element: ObservedElement = window
) => {
  // TODO add options
  const callEvent = useCallback<CallEventCallback<T>>(
    (data) => {
      const event = new CustomEvent(eventName, {
        detail: data /* ...options */,
      });

      element.dispatchEvent(event);
    },
    [element, eventName]
  );

  return callEvent;
};
