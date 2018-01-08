/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
