import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: palette.background.default,
  },
}));

const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      {children}
    </div>
  );
};

export default Page;
