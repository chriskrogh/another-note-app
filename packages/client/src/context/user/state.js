import { createContext } from 'react';

export const initialState = {
  setUser: (user) => {},
  unsetUser: () => {},
};

export const UserContext = createContext(initialState);
