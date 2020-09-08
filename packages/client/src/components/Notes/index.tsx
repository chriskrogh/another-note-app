import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Note } from '@relay/shared/src/models/Note';
import { Typography } from '@material-ui/core';

const notes: Note[] = [
  {
    title: 'test',
    description: 'test d',
  },
  {
    title: 'test 2',
    description: 'test 2 d',
  },
  {
    title: 'test 3',
    description: 'test 3 d',
  },
];

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    marginTop: spacing(1),
    borderColor: palette.text.secondary,
  },
}));

const Notes: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {notes.map((note) => (
        <>
          <Typography>{note.title}</Typography>
          <Typography>{note.description}</Typography>
        </>
      ))}
    </div>
  );
};

export default Notes;
