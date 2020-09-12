import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header, { HEIGHT, PADDING } from '../components/Header';

const useStyles = makeStyles(({ palette }) => ({
  container: {
    top: 0,
    minWidth: '100vw',
    minHeight: `calc(100vh - ${HEIGHT + 2 * PADDING}px)`,
    backgroundColor: palette.background.default,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Page = ({ center, children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classnames(classes.container, center && classes.center)}>
        {children}
      </div>
    </>
  );
};

export default Page;
