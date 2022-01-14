import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
const saveExpenseHandler=(expenseData)=>{
    const savedExpenseData={
        ...expenseData,
        id:Math.random().toString()
    }
    props.onAddExpense(savedExpenseData);
}
return(
<div className="new-expense">
    <ExpenseForm onSaveExpense={saveExpenseHandler}/>
</div>
);
}

export default NewExpense