import React from 'react';
import { shallow } from 'enzyme';
import  NameSite  from '../src/components/NameSite/NameSite.jsx';

describe('Name site', ()=>{

  it('render namesite', ()=>{
    const nameSite = shallow(<NameSite />);
    expect(nameSite).toMatchSnapshot();
  });
})