import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterHandler = (event) => {
    props.onAddFilterExpenses(event.target.value);
  };

  return (
    <>
      <div className="expense-filter">
        <label>Filter by month</label>
      </div>
      <div className="expense-filter__date">
        <select value={props.selected} onChange={filterHandler} name="dropdown-year">
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
