export const useEmitter = <T>(eventName: string, data: T) => {
  const callEvent = (data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    window.dispatchEvent(event);
  };

  callEvent(data);
};
