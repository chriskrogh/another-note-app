import { createContext } from 'react';
import LightTheme from '../../theme/light';
import DarkTheme from '../../theme/dark';

export const initialState = {
  theme: localStorage.getItem('theme') === 'dark' ? DarkTheme : LightTheme,
  setTheme: (theme) => {},
};

export const ThemeContext = createContext(initialState);
