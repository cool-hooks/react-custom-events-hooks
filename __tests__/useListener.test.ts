import { renderHook } from '@testing-library/react-hooks';

import { useListener } from '../src';

describe('useListener', () => {
  // it('should', () => {
  //   const onSignal = jest.fn();

  //   const { result } = renderHook(() =>
  //     useListener({
  //       eventName: 'myAwesomeCustomEvent',
  //       defaultValue: {
  //         sender: 'dummy-sender',
  //       },
  //       onSignal,
  //     })
  //   );

  //   result.current({
  //     title: 'hello',
  //     message: 'world',
  //   });

  //   expect(onSignal).toHaveBeenCalledWith({
  //     title: 'hello',
  //     message: 'world',
  //   });
  // });

  it('should call onSignal when custom event is emitted', () => {
    const onSignal = jest.fn();

    renderHook(() =>
      useListener({
        eventName: 'myAwesomeCustomEvent',
        onSignal,
      })
    );

    window.dispatchEvent(
      new CustomEvent('myAwesomeCustomEvent', {
        detail: {
          title: 'hello',
          message: 'world',
        },
      })
    );

    expect(onSignal).toHaveBeenCalledWith({
      title: 'hello',
      message: 'world',
    });
  });

  // it.todo('onSignal call')
  // it.todo('no onSignal') ?

  // TODO custom element
  it('should ', () => {
    const onSignalElement = jest.fn();
    const onSignalWindow = jest.fn();

    const element = document.createElement('div');

    renderHook(() =>
      useListener({
        eventName: 'myAwesomeCustomEvent',
        onSignal: onSignalElement,
        element,
      })
    );

    renderHook(() =>
      useListener({
        eventName: 'myAwesomeCustomEvent',
        onSignal: onSignalWindow,
      })
    );

    element.dispatchEvent(
      new CustomEvent('myAwesomeCustomEvent', {
        detail: {
          title: 'hello',
          message: 'world',
        },
      })
    );

    expect(onSignalElement).toHaveBeenCalledWith({
      title: 'hello',
      message: 'world',
    });

    expect(onSignalWindow).not.toHaveBeenCalled();
  });

  it.todo('multiple calls one by one');

  // it.todo('custom element')
  it.todo('options');
});
