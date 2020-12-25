import { useListener } from './useListener';
import { useEmitter } from './useEmitter';

import type { Element, Options } from '../types';

interface Params<T> {
  readonly eventName: string;
  onSignal?: (e: CustomEvent<T>) => void;
  readonly element?: Element;
  readonly options?: Options;
}

export const useCustomEvent = <T>({
  eventName,
  onSignal,
  element = window,
  options = {},
}: Params<T>) => {
  const handleSignal = onSignal || (() => null);

  useListener<T>(eventName, handleSignal, element, options);

  return useEmitter<T>(eventName, element);
};
