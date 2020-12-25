import type { Element } from '../types';

export const useEmitter = <T>(eventName: string, element: Element = window) => {
  const callEvent = (data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    element.dispatchEvent(event);
  };

  return callEvent;
};
