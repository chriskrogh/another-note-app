import { initialState } from './state';
import ActionTypes from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      localStorage.setItem('theme', action.payload.name);
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
