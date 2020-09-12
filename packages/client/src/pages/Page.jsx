import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: palette.background.default,
  },
}));

const Page = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Page;
