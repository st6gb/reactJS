import 'regenerator-runtime/runtime';
import { FETCH_FILMS, UPDATE, UPDATE_FILM_BY_ID } from '../constant_action';

const INITIAL_STATE = {
  loading: false,
  items: [],
};

// reducers
export default function filmsReduces (state = INITIAL_STATE, action = {}) {
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
}
