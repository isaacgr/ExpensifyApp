import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
      <div>
        {
          expenseCount === 0 ? '' :
          <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: total(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
