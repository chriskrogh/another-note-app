import React from 'react';

const Note = ({ note }) => {
  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
    </>
  );
};

export default Note;
