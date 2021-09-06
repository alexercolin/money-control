import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { data: items } = props;
  const [filteredYear, setFilter] = useState();

  const filterExpenseDate = (selectedYear) => {
    setFilter(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        {console.log(items[0].date)}
        <ExpenseFilter
          selected={filteredYear}
          onAddFilterExpenses={filterExpenseDate}
        />
        {items.map((index) => (
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
