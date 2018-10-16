import React from 'react';
import  Header  from '../src/components/Header/Header';
import { shallow } from 'enzyme';

describe('component', () => {
  it("header",()=>{
    const component = shallow(<Header />);
    expect(component.find('.header')).toBeDefined();
    expect(component.find('.header')).toHaveLength(1);
  })
  
});