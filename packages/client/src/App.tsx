import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import Notes from './components/Notes';
import environment from './relay/environment';

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Notes />
    </RelayEnvironmentProvider>
  );
};

export default App;
