import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Note from './components/Note';
import './App.css';

const AppQuery = graphql`
  query AppQuery {
    allNotes {
      title
      description
    }
  }
`;

function App() {
  const data = useLazyLoadQuery(AppQuery);
  return (
    <div className="App">
      {data?.allNotes?.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
}

export default App;
