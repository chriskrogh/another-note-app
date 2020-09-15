import { useState, useMemo } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, useSubscription } from 'react-relay/hooks';

const useNotes = (owner) => {
  const data = useLazyLoadQuery(
    graphql`
      query useNotesQuery($owner: String!) {
        myNotes(owner: $owner) {
          _id
          title
          description
        }
      }
    `,
    { owner },
  );

  const [notes, setNotes] = useState(data?.myNotes);

  const NotesSubscription = useMemo(
    () => ({
      subscription: graphql`
        subscription useNotesSubscription($owner: String!) {
          subToMyNotes(owner: $owner) {
            _id
            title
            description
          }
        }
      `,
      variables: { owner },
      onNext: (response) => {
        console.log(response);
        const newNotes = response?.subToMyNotes;
        if (newNotes) setNotes(newNotes);
      },
    }),
    [owner],
  );
  useSubscription(NotesSubscription);

  return notes;
};

export default useNotes;
