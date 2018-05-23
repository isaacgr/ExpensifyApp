import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <div>
      <Link
        to={`/edit/${id}`}
        >
        <h3>{description}</h3>
        </Link>
      <p>Amount: {amount}</p>
      <p>Created At: {createdAt}</p>
    </div>
  </div>
);

export default ExpenseListItem;
