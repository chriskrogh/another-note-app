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
    padding: spacing(4),
    [breakpoints.down('sm')]: {
      width: '90vw',
      maxHeight: '90vh',
      padding: spacing(2),
    },
  },
  textField: {
    width: '100%',
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
          <Box>
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
          <Box display="flex" justifyContent="space-between">
            <Button>Cancel</Button>
            <Button className={classes.saveButton}>Save</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NoteModal;
