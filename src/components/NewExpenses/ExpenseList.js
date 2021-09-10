import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
  return (
    <div>
      {Object.keys(props.items).length === 0 && (
        <p className="expense-list__fallback">No valid data found!</p>
      )}
      {props.items.length > 0 &&
        props.items.map((index) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
            key={index.id}
          />
        ))}
    </div>
  );
};

export default ExpenseList;
