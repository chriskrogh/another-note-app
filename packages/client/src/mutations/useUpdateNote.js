import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

const useUpdateNote = () => {
  const [commit] = useMutation(
    graphql`
      mutation useUpdateNoteMutation($id: String!, $data: UpdateNoteInput!) {
        updateNote(id: $id, data: $data) {
          _id
        }
      }
    `,
  );

  const updateNote = (id, data) => {
    commit({
      variables: {
        id,
        data,
      },
    });
  };

  return updateNote;
};

export default useUpdateNote;
