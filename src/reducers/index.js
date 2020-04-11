import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { auth } from './authReducer';

export default combineReducers({
  auth,
  formReducer,
});
