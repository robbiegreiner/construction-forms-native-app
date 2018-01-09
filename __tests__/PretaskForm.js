import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PretaskForm from '../components/PretaskForm';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<PretaskForm />);
  expect(wrapper).toBeDefined();
});

it('maches snapshot', () => {
  const wrapper = shallow(<PretaskForm />);
  expect(wrapper).toMatchSnapshot();
});

it('should have a default state', () => {
  const wrapper = shallow(<PretaskForm />);
  expect(wrapper.state()).toEqual({
    employee_name: '',
    employee_email: '',
    project_id: null,
    company: '',
    date: '',
    crewSize: null,
    tools: false,
    requireTraining: false,
    msdsReviewed: false,
    adequateLighting: false,
    weatherConditions: false,
    equipmentShutDown: false,
    impactOwner: false,
    planReview: false,
    fluidDischarge: false,
    subInvolvement: false,
    specialPermits: false,
    buddyAssignment: false,
    safetyLocations: false,
    lifting: false,
    hazards: '',
    signature: '',
  });
});
