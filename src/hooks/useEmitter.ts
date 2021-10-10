import { useCallback } from 'react';

import type { ObservedElement } from '../types';

type CallEventCallback<T> = (data: T) => void;

// TODO allow eventName as param in callEvent
export const useEmitter = <T>(eventName: string, element: ObservedElement = window) => {
  const callEvent = useCallback<CallEventCallback<T>>(
    (data) => {
      const event = new CustomEvent(eventName, { detail: data });

      element.dispatchEvent(event);
    },
    [element, eventName]
  );

  return callEvent;
};
