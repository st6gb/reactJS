import active from '../src/store/reducers/active';
import sorting from '../src/store/reducers/sorting';
import filmReduces from '../src/store/reducers/filmsReduces';
import { FETCH_FILMS, UPDATE, FETCH_FILMS_BY_ID, UPDATE_FILM_BY_ID, SET_ACTIVE, SORT_FILM} from '../src/store/constant_action';

describe('reducers',()=>{
  it('active', ()=>{
    const state = 'genres';
    const action = {type: SET_ACTIVE, active: "title"};
    expect(active(state, action)).toEqual("title");
    expect(active(undefined, {})).toEqual("genres");
  })
  it('sorting', ()=>{
    const state = 'date';
    const action = {type: SORT_FILM, sortBy: "release"}
    expect(sorting(state, action)).toEqual("release");
    expect(sorting(undefined, {})).toEqual("runtime");
  })
  it('request',()=>{
    const state = {
      loading: false,
      items: []
    };
    let action = {type: FETCH_FILMS};
    expect(filmReduces(state, action)).toEqual({loading: true, items:[]});
    action = {type: UPDATE, payload: ['kek', 'bla']};
    expect(filmReduces(state, action)).toEqual({loading: false, items: ['kek', 'bla']})
    action = {type: UPDATE_FILM_BY_ID, payload: {kek:'bla'}};
    expect(filmReduces(state, action)).toEqual({loading: false, items: [], oneMovie: {kek: 'bla'}})
    action= {type: "lalla", payload: {}};
    expect(filmReduces(state, action)).toEqual({loading: false, items: []});
    expect(filmReduces()).toEqual({loading: false, items: []})
  })
})