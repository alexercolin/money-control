import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterHandler = (event) => {
    props.onAddFilterExpenses(event.target.value);
  };

  return (
    <>
      <div className="expense-filter">
        <label>Filter by year</label>
      </div>
      <div className="expense-filter__date">
        <select onChange={filterHandler} name="dropdown-year">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
