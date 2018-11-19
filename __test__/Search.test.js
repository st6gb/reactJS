import React from 'react';
import ConnectedSearch, { Search } from '../src/components/Search/Search';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import setActiveTab from '../src/store/actions/activeTab';
import active from '../src/store/reducers/active';

describe('component', () => {
  it("search",()=>{
    const props = {activeTab: "title"}
    const component = mount(<Search {...props}/>);
    expect(component.find('.input_search')).toBeDefined();
    expect(component.find('.input_search')).toHaveLength(1);
    expect(component.find('.option_search')).toBeDefined();
    expect(component.find('.option_search')).toHaveLength(1);
  })
  it('search dispatch', ()=>{
    const initialState = {active: "genres"}
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><BrowserRouter><ConnectedSearch /></BrowserRouter></Provider> );
    expect(wrapper.find(Search).prop('activeTab')).toEqual(initialState.active)
  })
  it('check dispatch ', ()=>{
    const initialState = {active: "blet"}
    const mockStore = configureStore(active);
    let store, wrapper;
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><BrowserRouter><ConnectedSearch /></BrowserRouter></Provider> );
    store.dispatch(setActiveTab("lala"));
    console.log(store.getState())
    let action;
    action = store.getActions();
    console.log(action[0])
    expect(action[0].active).toBe('lala');
  })
});