/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CreateAccount from '../components/CreateAccount';

it('renders correctly', () => {
  const tree = renderer.create(<CreateAccount />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<CreateAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});
