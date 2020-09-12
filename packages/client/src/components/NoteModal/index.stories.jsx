import React from 'react';
import NoteModal from '.';

export default {
  title: 'NoteModal',
  component: NoteModal,
};

const note = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  owner: '1',
};

export const Base = () => <NoteModal isOpen note={note} />;

export const Mobile = () => (
  <div style={{ width: 375 }}>
    <NoteModal isOpen note={note} />
  </div>
);
