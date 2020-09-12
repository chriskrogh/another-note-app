import { createContext } from 'react';

export const initialState = {
  setNote: (note) => {},
  unsetNote: () => {},
};

export const NoteContext = createContext(initialState);
