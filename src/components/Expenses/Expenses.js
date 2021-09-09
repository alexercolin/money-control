import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { data: items } = props;
  const [filteredYear, setFilter] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filterExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onAddFilterExpenses={filterChangeHandler}
        />
        {filterExpenses.map((index) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
            key={index.id}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
