import { initialState } from './state';
import ActionTypes from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.UNSET_USER:
      return {
        ...state,
        user: undefined,
      };
    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.UNSET_TOKEN:
      return {
        ...state,
        token: initialState.token,
      };
    default:
      return state;
  }
};
