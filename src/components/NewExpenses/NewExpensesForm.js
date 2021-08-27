import React, { useState } from "react";
import "./NewExpensesForm.css";

const NewExpensesForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleEnteredTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleEnteredAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleEnteredDate = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__form">
        <div className="new-expense__field">
          <label>Title</label>
          <input type="text" onChange={handleEnteredTitle} />
        </div>
        <div className="new-expense__field">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleEnteredAmount}
          />
        </div>
        <div className="new-expense__field">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleEnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpensesForm;
