import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from '../../relay/environment';

const StoryWrapper = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">{children}</Suspense>
    </RelayEnvironmentProvider>
  );
};

export default StoryWrapper;
