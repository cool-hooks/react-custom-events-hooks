import { renderHook } from '@testing-library/react-hooks';

import { useCustomEvent } from '../src';

describe('useCustomEvent', () => {
  it('should', () => {
    const { result } = renderHook(() => useCustomEvent({eventName: 'myAwesomeCustomEvent'}));

    // expect(result.sum(2, 3)).toBe(5);
  });
});
