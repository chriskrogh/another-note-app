import React, { useReducer } from 'react';
import { NoteContext, initialState } from './state';
import Reducer from './reducer';
import ActionTypes from './actions';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setNote = (note) => {
    dispatch({ type: ActionTypes.SET_USER, payload: note });
  };

  const unsetNote = () => {
    dispatch({ type: ActionTypes.UNSET_USER });
  };

  return (
    <NoteContext.Provider
      value={{
        ...state,
        setNote,
        unsetNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default Provider;
