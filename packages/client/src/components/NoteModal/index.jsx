import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Box, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { UserContext } from '../../context/user/state';
import { NoteContext } from '../../context/note/state';
import Spacer from '../Spacer';
import useCreateNote from '../../mutations/useCreateNote';
import useUpdateNote from '../../mutations/useUpdateNote';
import useDeleteNote from '../../mutations/useDeleteNote';

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

const NoteModal = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { note, unsetNote } = useContext(NoteContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const createNote = useCreateNote();
  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();

  useEffect(() => {
    if (note && (title == null || description == null)) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note, title, description]);

  const unset = () => {
    setTitle();
    setDescription();
    unsetNote();
  };

  const handleDelete = () => {
    deleteNote(note?._id);
    unset();
  };

  const handleSave = () => {
    if (note?._id) {
      updateNote(note._id, { title, description });
    } else {
      createNote({
        title,
        description,
        owner: user._id,
      });
    }
    unset();
  };

  return (
    <Modal open={note !== undefined} handleClose={unset}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box className={classes.container}>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={unset}>
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
            {note?._id ? (
              <Button className={classes.deleteButton} onClick={handleDelete}>
                Delete
              </Button>
            ) : (
              <Spacer width={1} />
            )}
            <Button className={classes.saveButton} onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NoteModal;
