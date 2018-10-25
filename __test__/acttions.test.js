import setActiveTab from '../src/actions/activeTab';
import sortBy from '../src/actions/sortBy';

describe('actions', ()=>{
  it('setActiveTab', ()=>{
    const title = "kek";
    expect(setActiveTab(title)).toEqual({type: "SET_ACTIVE", active: "kek" })
  })
  it('sortBy', ()=>{
    const title = "kek";
    expect(sortBy(title)).toEqual({type: "SORT_FILM", sortBy: "kek" })
  })
})