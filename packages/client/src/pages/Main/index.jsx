import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/state';
import Page from '../Page';
import Notes from '../../components/Notes';

const Main = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return (
    <Page>
      <Notes owner={user._id} />
    </Page>
  );
};

export default Main;
