import type { ObservedElement, Options } from '.';

export interface Params<T> {
  readonly eventName: string;
  readonly onSignal: (e: CustomEvent<T>) => void;
  readonly element: ObservedElement;
  readonly options: Options;
}
