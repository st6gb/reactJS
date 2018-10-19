import { combineReducers } from 'redux';
import active from './active';
import request from './request'

export default combineReducers({
  active,
  request
})