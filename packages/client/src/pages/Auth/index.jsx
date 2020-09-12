import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import Page from '../Page';
import FacebookIcon from './facebook.png';
import GoogleIcon from './google.png';
import Spacer from '../../components/Spacer';

const API_ENDPOINT = '/api/auth';

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(2),
    backgroundColor: palette.background.paper,
  },
  button: {
    display: 'flex',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    textTransform: 'none',
  },
}));

const Auth = () => {
  const classes = useStyles();
  return (
    <Page center>
      <Typography variant="h1" color="textPrimary" align="center">
        Another notes app :P
      </Typography>
      <Spacer height={40} />
      <Box className={classes.container}>
        <Button
          onClick={() => window.location.replace(`${API_ENDPOINT}/facebook`)}
        >
          <img alt="facebook" src={FacebookIcon} className={classes.icon} />
          <Spacer width={8} />
          <Typography className={classes.text}>
            Continue with Facebook
          </Typography>
        </Button>
        <Spacer height={24} />
        <Button
          onClick={() => window.location.replace(`${API_ENDPOINT}/google`)}
        >
          <img alt="google" src={GoogleIcon} className={classes.icon} />
          <Spacer width={8} />
          <Typography className={classes.text}>Continue with Google</Typography>
        </Button>
      </Box>
    </Page>
  );
};

export default Auth;
