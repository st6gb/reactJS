import { FETCH_FILMS_BY_ID, UPDATE_FILM_BY_ID } from '../constant_action';

export const fetchFilmById = (filmId) => ({ type: FETCH_FILMS_BY_ID, payload: filmId });

export const updateFilmById = film => ({
  type: UPDATE_FILM_BY_ID,
  payload: film,
});
