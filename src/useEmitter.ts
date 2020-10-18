import type { Element } from './types';

export const useEmitter = (
  eventName: string | string[],
  element: Element = window
) => {
  const callEvent = <T>(data: T) => {
    const x = (z: string) => {
      const event = new CustomEvent(z, { detail: data });

      element.dispatchEvent(event);
    };

    if (typeof eventName === 'string') {
      x(eventName);
    } else {
      eventName.map((z) => {
        x(z);
      });
    }
  };

  return callEvent;
};
