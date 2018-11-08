import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import combineReducer from './reducers/index';
import filmsSaga from './sagas/index';

const persistConfig = {
  key: 'root',
  storage,
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, combineReducer);

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(filmsSaga);

  return { store, persistor };
}
