import React, { useState } from "react";
import NewExpenseForm from "./NewExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newExpensesInput = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };

  const handleShow = () => setShowForm(true);
  const handleHide = () => setShowForm(false);

  return (
    <>
      <div className="new-expense">
        {showForm && (
          <NewExpenseForm
            onHideForm={handleHide}
            showForm={showForm}
            onAddExpenses={newExpensesInput}
          />
        )}
        {showForm || <button onClick={handleShow}>Add New Expenses</button>}
      </div>
    </>
  );
};

export default NewExpenses;
