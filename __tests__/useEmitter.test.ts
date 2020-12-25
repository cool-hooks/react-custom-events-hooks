import { renderHook } from '@testing-library/react-hooks';

import { useEmitter } from '../src';

describe('useEmitter', () => {
  it('should', () => {
    const { result } = renderHook(() => useEmitter('myAwesomeCustomEvent'));

    result.current({
      title: 'hello',
    });
  });

  it('should', () => {
    const { result } = renderHook(() => null);
  });
});
