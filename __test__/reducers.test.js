import active from '../src/reducers/active';
import request from '../src/reducers/request';
import sorting from '../src/reducers/sorting';

describe('reducers',()=>{
  it('active', ()=>{
    const state = 'ganres';
    const action = {type: "SET_ACTIVE", active: "title"};
    expect(active(state, action)).toEqual("title");
    expect(active(state, {})).toEqual("ganres");
  })
  it('sorting', ()=>{
    const state = 'date';
    const action = {type: "SORT_FILM", sortBy: "release"}
    expect(sorting(state, action)).toEqual("release");
    expect(sorting(state, {})).toEqual("date");
  })
  it('request',()=>{
    const state = [];
    const action = {type: "GET_FILM_REQUEST_SUCCESS", payload: {bla: 'bla'} };
    expect(request(state, action)).toEqual([{bla: 'bla'}])
  })
})