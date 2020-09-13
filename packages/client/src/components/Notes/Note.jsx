import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { NoteContext } from '../../context/note/state';

const SIZE = 350;
const BORDER_WIDTH = 2;

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(1),
    margin: spacing(1),
    width: SIZE,
    maxHeight: 200,
    border: `${BORDER_WIDTH}px solid ${palette.primary.main}`,
    borderRadius: 8,
    cursor: 'pointer',
    overflow: 'hidden',
    [breakpoints.down('sm')]: {
      width:
        window.innerWidth -
        (2 * spacing(2) + 4 * spacing(1) + 2 * BORDER_WIDTH),
    },
    '&:hover': {
      boxShadow: `6px 4px ${palette.secondary.main}`,
      maxHeight: 'initial',
    },
  },
}));

const Note = ({ note }) => {
  const classes = useStyles();
  const { setNote } = useContext(NoteContext);

  return (
    <Box className={classes.container} onClick={() => setNote(note)}>
      <Typography variant="h4" color="primary">
        {note.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {note.description}
      </Typography>
    </Box>
  );
};

export default Note;
