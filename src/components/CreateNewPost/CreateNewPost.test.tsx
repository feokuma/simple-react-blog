import React from 'react';
import renderer from 'react-test-renderer';
import CreateNewPost from './CreateNewPost';

test('Should render correctly', () => {
  const tree = renderer.create(<CreateNewPost />).toJSON();

  expect(tree).toMatchSnapshot();
});
