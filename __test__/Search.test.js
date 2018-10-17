import React from 'react';
import { Search } from '../src/components/Search/Search';
import { mount } from 'enzyme';

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
    const props = {activeTab: "title"}
    const component = mount(<Search {...props}/>);
    
  })
});