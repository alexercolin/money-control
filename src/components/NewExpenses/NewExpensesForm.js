import React from "react";
import "./NewExpensesForm.css";

const NewExpensesForm = () => {
  return (
    <form>
      <div className="new-expense__form">
        <div className="new-expense__field">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__field">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__field">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpensesForm;
