import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        props.saveExpenseFormData(expenseData);
        setEnteredTitle('')
        setenteredAmount('')
        setenteredDate('')
    }
    const cancelAddExpense = (event) => {
        event.preventDefault();
        props.cencelEdit();
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    // const titleChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle : event.target.value
    //     // })
    //     setUserInput = (prevState) => {
    //         return { ...userInput, enteredTitle : event.target.value}
    //     }
    // }

    // const amountChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount : event.target.value
    //     // })
    //     setUserInput = (prevState) => {
    //         return { ...userInput, enteredAmount : event.target.value}
    //     }
    // }

    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate : event.target.value
    //     // })
    //     setUserInput = (prevState) => {
    //         return { ...userInput, enteredDate : event.target.value}
    //     }
    // }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="1" step="1" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={cancelAddExpense}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;