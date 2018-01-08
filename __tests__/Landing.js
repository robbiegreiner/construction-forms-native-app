/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../components/Landing';

it('renders correctly', () => {
  const tree = renderer.create(<Landing />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<Landing />).toJSON();
  expect(tree).toMatchSnapshot();
});
