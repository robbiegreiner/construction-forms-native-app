/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HotworkForm from '../components/HotworkForm';


it.skip('renders correctly', () => {
  const tree = renderer.create(<HotworkForm />);
  expect(tree).toBeDefined();
});

it.skip('maches snapshot', () => {
  const tree = renderer.create(<HotworkForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
