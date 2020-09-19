import { useListener, useEmitter } from '.';

interface Params {
  readonly eventName: string;
  onSignal?: (e: CustomEvent) => void;
}

export const useCustomEvent = ({ eventName, onSignal }: Params) => {
  useListener(eventName, onSignal!);

  const callEvent = useEmitter;

  return callEvent;
};
