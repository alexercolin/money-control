import React, { useState } from "react";
import ExpenseList from "../NewExpenses/ExpenseList";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { data: items } = props;
  const [filteredYear, setFilter] = useState("1");

  const filterChangeHandler = (selectedMonth) => {
    setFilter(selectedMonth);
  };

  const filterExpenses = items.filter((expense) => {
    return expense.date.getMonth().toString() === filteredYear;
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
