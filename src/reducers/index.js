import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { auth } from './authReducer';
import { streams } from './streamReducer';

export default combineReducers({
  auth,
  form,
  streams,
});
