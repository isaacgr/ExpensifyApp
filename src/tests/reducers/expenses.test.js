import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add expense', () => {
  const testExpense = {
    id: '4',
    description: 'Test',
    note: '',
    'amount': '1',
    createdAt: moment(0).add(5, 'days').valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: testExpense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, testExpense])
})

test('should edit expense', () => {
  const expenseUpdate = {
    description: 'Test',
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: expenseUpdate
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    {
      ...expenses[0],
      description:'Test'
    },
    expenses[1],
    expenses[2]
  ])
})

test('should not edit expense if id not found', () => {
  const expenseUpdate = {
    description: 'Test',
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: expenseUpdate
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    ...expenses
  ])
})
