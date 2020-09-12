import { initialState } from './state';
import ActionTypes from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    case ActionTypes.UNSET_NOTE:
      return {
        ...state,
        note: undefined,
      };
    default:
      return state;
  }
};
