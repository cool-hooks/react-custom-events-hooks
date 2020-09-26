import { useListener } from './useListener';
import { useEmitter } from './useEmitter';

import type { Element, Options } from './types';

interface Params {
  readonly eventName: string;
  onSignal?: (e: CustomEvent) => void;
  readonly element?: Element;
  readonly options?: Options;
}

export const useCustomEvent = ({
  eventName,
  onSignal,
  element = window,
  options = {},
}: Params) => {
  const handleSignal = onSignal || (() => null);

  useListener(eventName, handleSignal, element, options);

  return useEmitter(eventName, element);
};
