import React from 'react';
import CreateNoteButton from '.';

export default {
  title: 'CreateNoteButton',
  component: CreateNoteButton,
};

export const Base = () => <CreateNoteButton />;

export const Mobile = () => (
  <div style={{ width: 375 }}>
    <CreateNoteButton />
  </div>
);
