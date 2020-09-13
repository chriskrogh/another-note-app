import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LoadingNote from './LoadingNote';

const loadingNotes = Array(3).fill(null);

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {loadingNotes.map((_, index) => (
        <LoadingNote key={index} />
      ))}
    </Box>
  );
};

export default Loading;
