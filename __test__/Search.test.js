import React from 'react';
import ConnectedSearch, { Search } from '../src/components/Search/Search';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import setActiveTab from '../src/actions/activeTab';

describe('component', () => {
  it("search",()=>{
    const props = {activeTab: "title"}
    const component = mount(<Search {...props}/>);
    expect(component.find('.input_search')).toBeDefined();
    expect(component.find('.input_search')).toHaveLength(1);
    expect(component.find('.option_search')).toBeDefined();
    expect(component.find('.option_search')).toHaveLength(1);
  })
  it('search', () => {
    const initialState = {active: "genres"}
    const mockStore = configureStore();
    let store, container;
    store = mockStore(initialState)
    container = shallow(<ConnectedSearch store={store} /> )
    expect(container.prop('activeTab')).toEqual(initialState.active);  
    
  })
  it('search dispatch', ()=>{
    const initialState = {active: "genres"}
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><ConnectedSearch /></Provider> );
    expect(wrapper.find(Search).prop('activeTab')).toEqual(initialState.active)
  })
  it('check dispatch ', ()=>{
    const initialState = {active: "genres"}
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><ConnectedSearch /></Provider> );
    store.dispatch(setActiveTab("lala"));
    let action;
    action = store.getActions()
    expect(action[0].type).toBe("SET_ACTIVE");
  })
});