import 'react-native';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Login from '../components/Login';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Login />);
  expect(tree).toBeDefined();
});

it('maches snapshot', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have a default state', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.state()).toEqual({
    email: '',
    password: '',
    createAccount: null,
  });
});
