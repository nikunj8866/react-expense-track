import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if(filteredYear) {
        return expense.date.getFullYear().toString() === filteredYear;
    }
    else {
        return expense;
    }
  });

    return (
        <div className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses;