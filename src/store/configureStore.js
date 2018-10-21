import { createStore, applyMiddleware } from "redux";
import combineReducer from '../reducers/index';
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(combineReducer, initialState, applyMiddleware(thunk));
  

  return store
}