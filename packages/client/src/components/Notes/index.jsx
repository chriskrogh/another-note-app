import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import useNotes from '../../queries/useNotes';
import Note from './Note';

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

const Notes = ({ owner }) => {
  const classes = useStyles();
  const notes = useNotes(owner);

  return (
    <Box className={classes.container}>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </Box>
  );
};

export default Notes;
