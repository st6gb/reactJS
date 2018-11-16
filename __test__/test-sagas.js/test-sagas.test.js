import 'isomorphic-fetch';
import 'babel-polyfill';
import { put, take, call, select, all, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { fetchFilmsAsync, watchFetchFilms } from '../../src/store/sagas/fetchFilms';
import { fetchFilmByIdAsync, watchfetchFilmById } from '../../src/store/sagas/fetchFilmById';
import { updateFilms } from '../../src/store/actions/fetchFilms';
import { updateFilmById } from '../../src/store/actions/fetchFilmById';

describe('tests sagas', () => {
  describe('saga worker fetchFilmsAsync tests', ()=>{
    const action = {sortBy:"kek", sortOrder:"la", search:"be", searchBy:"kek"}
    const gen = cloneableGenerator(fetchFilmsAsync)(action);
    
    test('should send request without errors', ()=>{
      expect(gen.next().value).toEqual(call(fetch, 'http://react-cdp-api.herokuapp.com/movies?sortBy=kek&sortOrder=la&search=be&searchBy=kek&limit=20'))
    })
    test('should return data',()=>{
      const response = {json: () => ({a: 1})};
      expect(gen.next(response).value).toEqual({a:1})
    })
    test('lala', ()=>{
      const films = {data:{a:2}};
      expect(gen.next(films).value).toEqual(put(updateFilms(films.data)))
    })
  })
  describe('saga watcher watchFetchFilms test', ()=>{
    const generator = watchFetchFilms();
    test('laaa', ()=>{
      expect(generator.next().value).toEqual(takeLatest("GET_FILM_REQUEST", fetchFilmsAsync))
    })
  })
  describe('saga worker fetchFilmById test',()=>{
    const action = {payload: "/bla"};
    const url = `http://react-cdp-api.herokuapp.com/bla`
    const gen = cloneableGenerator(fetchFilmByIdAsync)(action);

    test('should send request without errors',()=>{
      expect(gen.next().value).toEqual(call(fetch, url));
    })
    test('should call method json',()=>{
      const response = {json: () => ({a: 1})};
      expect(gen.next(response).value).toEqual({a:1})
    })
    test('lala',()=>{
      const data = {a:2};
      expect(gen.next(data).value).toEqual(put(updateFilmById(data)))
    })
  })
  describe('saga wather wathFetchFilmById test', ()=>{
    const generator = watchfetchFilmById();
    test('should call takeLates', ()=>{
      expect(generator.next().value).toEqual(takeLatest('GET_MOVIE_REQUEST', fetchFilmByIdAsync))
    })
  })
})