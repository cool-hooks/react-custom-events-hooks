import { renderHook } from '@testing-library/react-hooks';

import { useEmitter } from '../src';

// TODO refactor
describe('useEmitter', () => {
  it('should emit custom event', () => {
    const { result } = renderHook(() => useEmitter('myAwesomeCustomEvent'));

    result.current({
      title: 'hello',
    });

    window.addEventListener('myAwesomeCustomEvent', (e) => {
      expect(e.detail).toStrictEqual({
        title: 'hello',
      });
    });
  });

  it('should emit custom event on element', () => {
    const element = document.createElement('div');

    const { result } = renderHook(() =>
      useEmitter('myAwesomeCustomEvent', element)
    );

    result.current({
      title: 'hello',
    });

    element.addEventListener('myAwesomeCustomEvent', (e) => {
      expect(e.detail).toStrictEqual({
        title: 'hello',
      });
    });
  });
});
