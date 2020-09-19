export const useEmitter = <T>(eventName: string) => {
  const callEvent = <T>(data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    window.dispatchEvent(event);
  };

  return callEvent;
};
