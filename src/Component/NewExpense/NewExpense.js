import React, {useState} from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseFormDataHandler = (savedExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...savedExpenseData
        }
        prop.onAddExpense(expenseData)
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            { isEditing === false ? <button onClick={startEditingHandler}>Add New Expense</button> : <ExpenseForm cencelEdit= {cancelEditing} saveExpenseFormData={saveExpenseFormDataHandler}/> }
        </div>
    )
}

export default NewExpense;