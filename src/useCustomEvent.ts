import { useListener, useEmitter } from '.';

interface Params {
  readonly eventName: string;
  onSignal?: (e: CustomEvent) => void;
  readonly element?: any; // TODO
  readonly options?: any; // TODO
}

export const useCustomEvent = ({
  eventName,
  onSignal,
  element = window,
  options = {},
}: Params) => {
  useListener(eventName, onSignal!, element, options);

  return useEmitter(eventName, element);
};
