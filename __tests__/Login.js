/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/Login';

it('renders correctly', () => {
  const tree = renderer.create(<Login />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
