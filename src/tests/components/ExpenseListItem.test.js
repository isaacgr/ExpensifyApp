import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render an expense item', () => {
  const wrapper = shallow(
    <ExpenseListItem
      key={expenses[0].id}
      {...expenses[1]}
  />)
  expect(wrapper).toMatchSnapshot();
})
