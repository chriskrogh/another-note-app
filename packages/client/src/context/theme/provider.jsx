import React, { useReducer } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext, initialState } from './state';
import Reducer from './reducer';
import ActionTypes from './actions';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setTheme = (theme) => {
    dispatch({ type: ActionTypes.SET_THEME, payload: theme });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Provider;
