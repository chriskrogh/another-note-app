import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import FacebookIcon from './facebook.png';
import GoogleIcon from './google.png';
import Spacer from '../../components/Spacer';
import { AUTH_API_ENDPOINT } from '../../utils/constants';

const useStyles = makeStyles({
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
});

const AuthButton = ({ provider }) => {
  const classes = useStyles();

  if (provider !== 'facebook' && provider !== 'google') return null;

  return (
    <Button
      onClick={() =>
        window.location.replace(`${AUTH_API_ENDPOINT}/${provider}`)
      }
    >
      <img
        alt={provider}
        src={provider === 'facebook' ? FacebookIcon : GoogleIcon}
        className={classes.icon}
      />
      <Spacer width={8} />
      <Typography className={classes.text}>
        Continue with {provider === 'facebook' ? 'Facebook' : 'Google'}
      </Typography>
    </Button>
  );
};

export default AuthButton;
