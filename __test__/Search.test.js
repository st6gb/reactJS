import React from 'react';
import ConnectedSearch, { Search } from '../src/components/Search/Search';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import setActiveTab from '../src/store/actions/activeTab';

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
    const initialState = {active: "genres"}
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><BrowserRouter><ConnectedSearch /></BrowserRouter></Provider> );
    store.dispatch(setActiveTab("lala"));
    let action;
    action = store.getActions()
    expect(action[0].type).toBe("SET_ACTIVE");
  })
});