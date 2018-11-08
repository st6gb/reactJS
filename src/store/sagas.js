import 'regenerator-runtime/runtime';
import { call, put, all, takeLatest } from 'redux-saga/effects';

// Actions
const FETCH_FILMS = 'GET_FILM_REQUEST';
const UPDATE = 'UPDATE_FILMS';
const FETCH_FILMS_BY_ID = 'GET_MOVIE_REQUEST';
const UPDATE_FILM_BY_ID = 'UPDATE_FILM_BY_ID';

// Action creator
export const fetchFilms = (sortBy, sortOrder, search, searchBy) => ({ type: FETCH_FILMS, sortBy, sortOrder, search, searchBy });

export const updateFilms = data => ({
  type: UPDATE,
  payload: data,
});

export const fetchFilmById = (filmId) => ({ type: FETCH_FILMS_BY_ID, payload: filmId });

export const updateFilmById = film => ({
  type: UPDATE_FILM_BY_ID,
  payload: film,
});
// sagas
export function* fetchFilmByIdAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com${action.payload}`);
  const film = yield response.json();
  yield put(updateFilmById(film));
}

export function* fetchFilmsAsync(action) {
  const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${action.sortBy}&sortOrder=${action.sortOrder}&search=${action.search}&searchBy=${action.searchBy}&limit=20`);
  const films = yield response.json();
  yield put(updateFilms(films.data));
}

export function* watchFetchFilms() {
  yield takeLatest(FETCH_FILMS, fetchFilmsAsync);
}

export function* watchfetchFilmById() {
  yield takeLatest(FETCH_FILMS_BY_ID, fetchFilmByIdAsync);
}
// Users Saga
export function* filmsSaga() {
  yield all([
    watchFetchFilms(),
    watchfetchFilmById(),
  ]);
}
// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

// reducers
export const filmsReduces = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_FILMS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_FILM_BY_ID:
      return {
        ...state,
        oneMovie: action.payload,
      };
    default:
      return state;
  }
};
