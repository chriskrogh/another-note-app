import React, { useContext, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/state';
import NoteContextProvider from '../../context/note/provider';
import Page from '../Page';
import LoadingNotes from '../../components/Notes/Loading';
import Notes from '../../components/Notes';
import CreateNoteButton from '../../components/CreateNoteButton';
import NoteModal from '../../components/NoteModal';

const Main = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return (
    <NoteContextProvider>
      <Page>
        <Suspense fallback={<LoadingNotes />}>
          <Notes owner={user._id} />
        </Suspense>
        <CreateNoteButton />
      </Page>
      <NoteModal />
    </NoteContextProvider>
  );
};

export default Main;
