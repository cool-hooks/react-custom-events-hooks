import React from 'react';

export const withSuspense = (eventName: string | string[]) => {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} />
  );
};
