import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

const useCreateNote = () => {
  const [commit] = useMutation(
    graphql`
      mutation useCreateNoteMutation($data: CreateNoteInput!) {
        createNote(data: $data) {
          _id
        }
      }
    `,
  );

  const createNote = (data) => {
    commit({
      variables: {
        data,
      },
    });
  };

  return createNote;
};

export default useCreateNote;
