import { FETCH_FILMS, UPDATE } from '../constant_action';

export const fetchFilms = (sortBy, sortOrder, search, searchBy) => ({ type: FETCH_FILMS, sortBy, sortOrder, search, searchBy });

export const updateFilms = data => ({
  type: UPDATE,
  payload: data,
});
