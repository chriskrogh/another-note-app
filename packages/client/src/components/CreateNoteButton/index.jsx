import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const SIZE = 60;

const useStyles = makeStyles(({ spacing, palette }) => ({
  button: {
    position: 'absolute',
    bottom: spacing(2),
    right: spacing(2),
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    background: palette.primary.main,
    opacity: 0.9,
    color: palette.text.secondary,
  },
}));

const CreateNoteButton = () => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      <AddIcon fontSize="large" />
    </Button>
  );
};

export default CreateNoteButton;
