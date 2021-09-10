import React, { useState } from "react";
import ExpenseList from "../NewExpenses/ExpenseList";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { data: items } = props;
  const [filteredYear, setFilter] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filterExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onAddFilterExpenses={filterChangeHandler}
        />
        <ExpenseList items={filterExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
