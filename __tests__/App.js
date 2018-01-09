/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import App from '../components/App';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper).toBeDefined();
})

it('maches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have a default state', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.state()).toEqual({
      userEmail: null,
      userID: null,
      user: null,
      currentView: 'home',
  });
});
