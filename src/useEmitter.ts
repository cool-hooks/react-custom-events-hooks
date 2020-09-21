export const useEmitter = <T>(
  eventName: string,
  element: any = window /*TODO*/
) => {
  const callEvent = <T>(data: T) => {
    const event = new CustomEvent(eventName, { detail: data });

    element.dispatchEvent(event);
  };

  return callEvent;
};
