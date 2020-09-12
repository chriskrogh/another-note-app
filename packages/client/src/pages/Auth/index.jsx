import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user/state';
import Page from '../Page';
import Spacer from '../../components/Spacer';
import AuthButton from '../../components/AuthButton';
import { AUTH_API_ENDPOINT } from '../../utils/constants';

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(2),
    backgroundColor: palette.background.paper,
  },
}));

const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(AUTH_API_ENDPOINT);
        setUser(data);
        history.push('/');
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUser();
  }, [history, setUser]);

  return (
    !loading && (
      <Page center>
        <Typography variant="h1" color="textPrimary" align="center">
          Another notes app :P
        </Typography>
        <Spacer height={40} />
        <Box className={classes.container}>
          <AuthButton provider="facebook" />
          <Spacer height={24} />
          <AuthButton provider="google" />
        </Box>
      </Page>
    )
  );
};

export default Auth;
