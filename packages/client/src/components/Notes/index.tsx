import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
// import { Note } from '@relay/shared/src/models/Note';

const getAllNotesQuery = graphql`
  query {
    allNotes {
      title
      description
    }
  }
`;

const Notes: React.FC = () => {
  const data = useLazyLoadQuery(getAllNotesQuery, {});
  console.log(data);
  return <div></div>;
};

export default Notes;
