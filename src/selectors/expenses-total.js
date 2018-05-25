const getExpensesTotal = (expenses) => {
  if(expenses.length === 0){
    return 0
  } else {
    const amounts = expenses.map((expense) => expense.amount)
    const total = amounts.reduce(reducer);
    return total;
  }
}

const reducer = (accumulator, currentValue) => (
  accumulator + currentValue
);

export default getExpensesTotal;
