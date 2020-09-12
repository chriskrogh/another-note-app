import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import Note from './Note';

const Notes = ({ owner }) => {
  const data = useLazyLoadQuery(
    graphql`
      query NotesQuery($owner: String!) {
        myNotes(owner: $owner) {
          title
          description
        }
      }
    `,
    { owner },
  );

  return (
    <>
      {data?.myNotes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </>
  );
};

export default Notes;
