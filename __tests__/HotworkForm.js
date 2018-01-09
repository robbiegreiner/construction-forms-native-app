/* eslint-disable */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HotworkForm from '../components/HotworkForm';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<HotworkForm />)
  expect(wrapper).toBeDefined();
})

it('maches snapshot', () => {
  const wrapper = shallow(<HotworkForm />)
  expect(wrapper).toMatchSnapshot();
});

it('should have a default state', () => {
  const wrapper = shallow(<HotworkForm/>)
  expect(wrapper.state()).toEqual({
    employee_name: null,
    employee_email: null,
    employee_id: null,
    project_id: null,
    company: '',
    date: '',
    firewatchRequirement: '',
    areaInspected: false,
    fireExtinguisher: false,
    flammablesRemoved: false,
    smokeDetectorsDisabled: false,
    sprinklerHeadsProtected: false,
    signature: null
  });
});
