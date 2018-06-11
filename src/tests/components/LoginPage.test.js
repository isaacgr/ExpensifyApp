import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <LoginPage />
  )
})

test('should render login page', () => {
  expect(wrapper).toMatchSnapshot();
})
