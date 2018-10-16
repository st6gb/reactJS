import React from 'react';
import  Footer  from '../src/components/Footer/Footer';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Footer className={'footer'}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});