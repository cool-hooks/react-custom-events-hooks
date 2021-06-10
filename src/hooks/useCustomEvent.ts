import { useMemo } from 'react';

import { useListener } from './useListener';
import { useEmitter } from './useEmitter';

import { Params } from '../types/Params';

export const useCustomEvent = <T>({
  eventName,
  onSignal,
  element = window,
  options = {},
}: Params<T>) => {
  const handleSignal = useMemo(() => onSignal || (() => null), [onSignal]);

  useListener<T>({ eventName, onSignal: handleSignal, element, options });

  return useEmitter<T>(eventName, element);
};
