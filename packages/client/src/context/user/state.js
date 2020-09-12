import { createContext } from 'react';

export const initialState = {
  token: localStorage.getItem('token') || undefined,
  setUser: (user) => {},
  unsetUser: () => {},
  setToken: (token) => {},
  unsetToken: () => {},
};

export const UserContext = createContext(initialState);
