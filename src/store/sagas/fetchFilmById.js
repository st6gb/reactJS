import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_FILMS_BY_ID } from '../constant_action';
import { updateFilmById } from '../actions/fetchFilmById';

export function* fetchFilmByIdAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com${action.payload}`);
  const film = yield response.json();
  yield put(updateFilmById(film));
}

export function* watchfetchFilmById() {
  yield takeLatest(FETCH_FILMS_BY_ID, fetchFilmByIdAsync);
}
