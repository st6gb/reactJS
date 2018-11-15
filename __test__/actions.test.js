import setActiveTab from '../src/store/actions/activeTab';
import sortBy from '../src/store/actions/sortBy';
import { fetchFilms, updateFilms } from '../src/store/actions/fetchFilms';
import { FETCH_FILMS, UPDATE, FETCH_FILMS_BY_ID, UPDATE_FILM_BY_ID, SET_ACTIVE, SORT_FILM} from '../src/store/constant_action';
import { fetchFilmById, updateFilmById } from '../src/store/actions/fetchFilmById';

describe('actions', ()=>{
  it('setActiveTab', ()=>{
    const title = "kek";
    expect(setActiveTab(title)).toEqual({type: SET_ACTIVE, active: "kek" })
  })
  it('sortBy', ()=>{
    const title = "kek";
    expect(sortBy(title)).toEqual({type: SORT_FILM, sortBy: "kek" })
  })
  it('fetchFilms', ()=>{
    const sortBy = 'sortBy';
    const sortOrder = 'sortOrder';
    const search = 'search';
    const searchBy = 'searchBy';
    expect(fetchFilms(sortBy, sortOrder, search, searchBy)).toEqual({type: FETCH_FILMS, sortBy, sortOrder, search, searchBy});
  })
  it('updateFilms', ()=>{
    const data = ['kek', 'lala'];
    expect(updateFilms(data)).toEqual({type: UPDATE, payload: data});
  })
  it('fetchFilmById', ()=>{
    const filmId = {kek: 'lala'};
    expect(fetchFilmById(filmId)).toEqual({type: FETCH_FILMS_BY_ID, payload: filmId})
  })
  it('updateFilmById', ()=>{
    const film = {kek: 'la-la'};
    expect(updateFilmById(film)).toEqual({type: UPDATE_FILM_BY_ID, payload: film})
  })
})