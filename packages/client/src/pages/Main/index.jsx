import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/state';
import Page from '../Page';
import Notes from '../../components/Notes';

const Main = () => {
  const userId = localStorage.getItem('id');
  const { user } = useContext(UserContext);

  if (!user && !userId) {
    return <Redirect to="/auth" />;
  }

  return (
    <Page>
      <Notes owner={userId} />
    </Page>
  );
};

export default Main;
