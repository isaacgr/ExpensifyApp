import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import total from '../selectors/expenses-total';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
      <div className='page-header'>
        <div className='content-container'>
          {
            expenseCount === 0 ? '' :
            <p className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></p>
          }
          <div className='page-header__actions'>
            <Link className='button' to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: total(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
