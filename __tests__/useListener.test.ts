import { renderHook } from '@testing-library/react-hooks';

import { useCustomEvent, useListener } from '../src';

describe('useListener', () => {
  it('should', () => {
    const { result } = renderHook(() =>
      useCustomEvent({ eventName: 'myAwesomeCustomEvent' })
    );

    result.current('hello');
  });

  it('should', () => {
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
});
