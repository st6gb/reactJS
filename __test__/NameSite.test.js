import React from 'react';
import  NameSite  from '../src/components/NameSite/NameSite.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <NameSite className={'content'}>nextflixroulette</NameSite>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});