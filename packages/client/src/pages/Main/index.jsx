import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/user/state';
import Page from '../Page';

const Main = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return <Page></Page>;
};

export default Main;
