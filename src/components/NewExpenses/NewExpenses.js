import React from "react";
import NewExpenseForm from "./NewExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const newExpensesInput = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onAddExpenses={newExpensesInput} />
    </div>
  );
};

export default NewExpenses;
