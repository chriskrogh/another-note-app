import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

const useDeleteNote = () => {
  const [commit] = useMutation(
    graphql`
      mutation useDeleteNoteMutation($id: String!) {
        deleteNote(id: $id)
      }
    `,
  );

  const deleteNote = (id) => {
    commit({
      variables: {
        id,
      },
    });
  };

  return deleteNote;
};

export default useDeleteNote;
