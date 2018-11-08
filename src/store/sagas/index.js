import { all } from 'redux-saga/effects';
import { watchFetchFilms } from './fetchFilms';
import { watchfetchFilmById } from './fetchFilmById';

export default function* filmsSaga() {
  yield all([
    watchFetchFilms(),
    watchfetchFilmById(),
  ]);
}
