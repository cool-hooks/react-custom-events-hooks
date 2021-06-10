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
  const handleSignal = useMemo(() => onSignal || (() => null), []);

  useListener<T>({ eventName, onSignal: handleSignal, element, options });

  return useEmitter<T>(eventName, element);
};
