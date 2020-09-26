import type { Element } from './types';

export const useEmitter = (eventName: string, element: Element = window) => {
  const callEvent = <T>(data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    element.dispatchEvent(event);
  };

  return callEvent;
};
