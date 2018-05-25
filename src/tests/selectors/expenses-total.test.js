import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
})

test('should correctly add up multiple expenses', () => {
  const amounts = expenses.map((expense) => expense.amount)
  const expensesTotal = amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue)
  const total = getExpensesTotal(expenses)
  expect(total).toBe(expensesTotal);
})

test('should correctly add up a single expense', () => {
  const expense = [expenses[0]]
  const total = getExpensesTotal(expense);
  expect(total).toBe(expenses[0].amount)
})
