import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Box, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Spacer from '../Spacer';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: palette.background.paper,
    borderRadius: 8,
    width: '50vw',
    maxHeight: '70vh',
    [breakpoints.down('sm')]: {
      width: '90vw',
      maxHeight: '90vh',
    },
  },
  textContainer: {
    padding: `0 ${spacing(4)}px`,
    [breakpoints.down('sm')]: {
      padding: `0 ${spacing(2)}px`,
    },
  },
  textField: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${spacing(4)}px ${spacing(4)}px ${spacing(4)}px`,
    [breakpoints.down('sm')]: {
      padding: `0 ${spacing(2)}px ${spacing(2)}px ${spacing(2)}px`,
    },
  },
  deleteButton: {
    background: palette.error.main,
    opacity: 0.9,
  },
  saveButton: {
    background: palette.primary.main,
    opacity: 0.9,
  },
}));

const NoteModal = ({ isOpen, handleClose, note }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  return (
    <Modal open={isOpen} handleClose={handleClose}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box className={classes.container}>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box className={classes.textContainer}>
            <TextField
              className={classes.textField}
              inputProps={{ style: { fontSize: 40 } }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              color="primary"
              size="medium"
            />
            <Spacer height={16} />
            <TextField
              className={classes.textField}
              inputProps={{ style: { fontSize: 20 } }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              color="secondary"
              size="medium"
              variant="outlined"
              multiline
            />
          </Box>
          <Spacer height={16} />
          <Box className={classes.buttonContainer}>
            <Button className={classes.deleteButton}>Delete</Button>
            <Button className={classes.saveButton}>Save</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NoteModal;
