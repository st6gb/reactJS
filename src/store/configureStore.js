import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import combineReducer from './reducers/index';
import filmsSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(combineReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(filmsSaga);
  store.runSaga = () => sagaMiddleware.run(filmsSaga);
  store.close = () => store.dispatch(END);

  return { store };
}
