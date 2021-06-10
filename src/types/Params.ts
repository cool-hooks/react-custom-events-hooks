import { Options } from '.';

export interface Params<T> {
  readonly eventName: string;
  readonly onSignal: (e: CustomEvent<T>) => void;
  readonly element: Element;
  readonly options: Options;
}
