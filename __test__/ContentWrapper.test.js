import React from 'react';
import  ContentWrapper  from '../src/components/ContentWrapper/ContentWrapper';
import { shallow } from 'enzyme';

describe('component', () => {
  it("ContentWrapper",()=>{
    const component = shallow(<ContentWrapper />);
    expect(component.find('.contentWrapper')).toBeDefined();
    expect(component.find('.contentWrapper')).toHaveLength(1);
  })
  
});