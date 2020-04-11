import { SIGN_IN, SIGN_OUT } from './types';

const INITIAL_STATE = {
  isSignedIn: null,
};

export function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}
