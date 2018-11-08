import { call, put, takeLatest } from 'redux-saga/effects';
import { updateFilms } from '../actions/fetchFilms';
import { FETCH_FILMS } from '../constant_action';

export function* fetchFilmsAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${action.sortBy}&sortOrder=${action.sortOrder}&search=${action.search}&searchBy=${action.searchBy}&limit=20`);
  const films = yield response.json();
  yield put(updateFilms(films.data));
}

export function* watchFetchFilms() {
  yield takeLatest(FETCH_FILMS, fetchFilmsAsync);
}
