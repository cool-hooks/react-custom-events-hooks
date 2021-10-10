import { renderHook } from '@testing-library/react-hooks';

import { useCustomEvent } from '../src';

describe('useCustomEvent', () => {
  it('should emit custom event', () => {
    const { result } = renderHook(() =>
      useCustomEvent({ eventName: 'myAwesomeCustomEvent' })
    );

    result.current('hello');
  });

  it('should emit and listen to custom event', () => {
    const onSignal = jest.fn();

    const { result } = renderHook(() =>
      useCustomEvent({
        eventName: 'myAwesomeCustomEvent',
        defaultValue: {
          sender: 'dummy-sender',
        },
        onSignal,
      })
    );

    result.current({
      title: 'hello',
      message: 'world',
    });

    expect(onSignal).toHaveBeenCalledWith({
      title: 'hello',
      message: 'world',
    });
  });

  it.todo('custom element')
  it.todo('options')
});
