import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
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

  const data = useLazyLoadQuery(
    graphql`
      query NotesQuery($owner: String!) {
        myNotes(owner: $owner) {
          _id
          title
          description
        }
      }
    `,
    { owner },
  );

  return (
    <Box className={classes.container}>
      {data?.myNotes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </Box>
  );
};

export default Notes;
