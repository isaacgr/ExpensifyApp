import React from 'react';
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary for one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={1}
      expensesTotal={100}
     />
   )
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary for multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={3}
      expensesTotal={500}
     />
   )
  expect(wrapper).toMatchSnapshot()})
