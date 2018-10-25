import { createStore, applyMiddleware } from "redux";
import combineReducer from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, combineReducer);

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor }

}