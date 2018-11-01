import { combineReducers } from 'redux';
import active from './active';
import request from './request';
import sorting from './sorting';
import requestOneMovie from './requestOneMovie';

export default combineReducers({
  active,
  request,
  sorting,
  requestOneMovie
})