/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import CreateAccount from '../components/CreateAccount';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<CreateAccount />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<CreateAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have a default state', () => {
  const wrapper = shallow(<CreateAccount  />)
  expect(wrapper.state()).toEqual({
    email: '',
    password: '',
    position: '',
    phone: '',
    name: ''
  });
});
