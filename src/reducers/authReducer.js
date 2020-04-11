import { SIGN_IN, SIGN_OUT, GET_AUTH_USER } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  user: {},
};

export function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    case GET_AUTH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
