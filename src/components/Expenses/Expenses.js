import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { data: items } = props;
  const [filteredYear, setFilter] = useState("2022");

  const filterExpenseDate = (selectedYear) => {
    setFilter(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onAddFilterExpenses={filterExpenseDate} />
        {items.map((index, i) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
            key={i}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
