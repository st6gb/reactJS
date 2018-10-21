import { combineReducers } from 'redux';
import active from './active';
import request from './request'
import sorting from './sorting'

export default combineReducers({
  active,
  request,
  sorting
})